const path = require('path');
const glob = require('glob');
const webpack = require('webpack');
const CompressionPlugin = require('compression-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const config = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    libraryTarget: 'commonjs2',
  },
  node: { fs: 'empty', net: 'empty' },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
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
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'postcss-loader',
            'sass-loader',
            {
              loader: 'sass-loader',
              options: {
                sassOptions: {
                  includePaths: ['./node_modules', './src/styles']
                    .map((d) => path.join(__dirname, d))
                    .map((g) => glob.sync(g))
                    .reduce((a, c) => a.concat(c), []),
                },
              },
            },
          ],
        }),
      },
    ],
  },
  externals: ['react', 'react-dom', 'classnames', 'lodash', 'prop-types'],
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    symlinks: false,
    plugins: [new DirectoryNamedWebpackPlugin(true)],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      services: path.resolve(__dirname, 'src/services'),
    },
  },
  optimization: {
    minimizer: [
      // https://github.com/mishoo/UglifyJS2/tree/harmony
      new UglifyJsPlugin({
        uglifyOptions: {
          output: { comments: false },
          minify: {},
          compress: {
            warnings: false,
            conditionals: true,
            unused: true,
            comparisons: true,
            sequences: true,
            dead_code: true,
            evaluate: true,
            if_return: true,
            join_vars: true,
          },
        },
      }),
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      disable: false,
      allChunks: true,
      filename: '[name].css',
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new CompressionPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
    new BundleAnalyzerPlugin(),
  ],
};

module.exports = config;
