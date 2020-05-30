const path = require('path');
const webpack = require('webpack');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const TerserPlugin = require('terser-webpack-plugin');
const S3Plugin = require('webpack-s3-plugin');
const compact = require('lodash/compact');
const ImageminPlugin = require('imagemin-webpack-plugin').default;
const nodeExternals = require('webpack-node-externals');

require('dotenv').config({ silent: true });

const isEnvProduction = process.env.NODE_ENV === 'production';
const isStaticBuild = process.env.BUILD_MODE === 'static';

const config = {
  entry: isStaticBuild ? './src/static.js' : './src/index.js',
  mode: process.env.NODE_ENV || 'development',
  devtool: !isEnvProduction ? 'eval-source-map' : false,
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: isStaticBuild ? 'gfw-assets.latest.js' : 'index.js',
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
        test: /\.css$/i,
        use: ['css-loader'],
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      services: path.resolve(__dirname, 'src/services'),
      constants: path.resolve(__dirname, 'src/constants'),
      'gfw-components': path.resolve(__dirname, 'src'),
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      lodash: path.resolve('./node_modules/lodash-es'),
      'lodash-es': path.resolve('./node_modules/lodash-es'),
    },
  },
  performance: {
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
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
    externals: [nodeExternals()],
  }),
  plugins: compact([
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
