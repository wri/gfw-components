const path = require('path');
const glob = require('glob');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  devtool: 'eval-source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
    plugins: [new DirectoryNamedWebpackPlugin(true)],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils'),
      services: path.resolve(__dirname, 'src/services'),
    },
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
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: [
          'style-loader',
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
      },
    ],
  },
  plugins: [],
};
