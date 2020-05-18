const path = require('path');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const compact = require('lodash/compact');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

require('dotenv').config({ silent: true });

const isEnvProduction = process.env.NODE_ENV === 'production';
const isStaticBuild = process.env.BUILD_MODE === 'static';

const config = {
  entry: isStaticBuild ? './src/static.js' : './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devtool: !isEnvProduction ? 'eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: isStaticBuild ? 'gfw-assets.latest.js' : 'bundle.js',
    libraryTarget: isStaticBuild ? 'var' : 'commonjs2',
  },
  node: { fs: 'empty', net: 'empty' },
  module: {
    rules: [
      { test: /\.(jpg|jpeg|png|gif)$/, use: 'url-loader' },
      {
        test: /\.svg$/,
        use: [
          {
            loader: '@svgr/webpack',
            options: { svgoConfig: { plugins: { removeViewBox: false } } },
          },
        ],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['last 2 versions', 'ie >= 11'],
                },
              },
            ],
            '@babel/preset-react',
          ],
          plugins: ['emotion', 'transform-class-properties'],
          cacheDirectory: true,
          cacheCompression: false,
          compact: isEnvProduction,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    plugins: [new DirectoryNamedWebpackPlugin(true)],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      services: path.resolve(__dirname, 'src/services'),
      constants: path.resolve(__dirname, 'src/constants'),
      'gfw-components': path.resolve(__dirname, 'src/index'),
    },
  },
  optimization: {
    minimize: isEnvProduction,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          parse: {
            ecma: 8,
          },
          compress: {
            ecma: 5,
            warnings: false,
            comparisons: false,
            inline: 2,
          },
          mangle: {
            safari10: true,
          },
          output: {
            ecma: 5,
            comments: false,
            ascii_only: true,
          },
        },
        sourceMap: !isEnvProduction,
      }),
    ],
  },
  ...(!isStaticBuild && {
    externals: [
      'react',
      'react-dom',
      'classnames',
      'lodash',
      'prop-types',
      '@emotion/core',
      '@emotion/styled',
    ],
  }),
  plugins: compact([
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ImageminPlugin(),
    process.env.ANALYZE_BUNDLE && new BundleAnalyzerPlugin(),
    isStaticBuild &&
      new S3Plugin({
        directory: 'dist',
        exclude: /.*\.html$/,
        s3Options: {
          accessKeyId: process.env.AWS_ACCESS_KEY_ID,
          secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
          region: 'us-east-1',
        },
        s3UploadOptions: { Bucket: 'gfw-assets/static' },
      }),
  ]),
};

module.exports = config;
