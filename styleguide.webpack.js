const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');

module.exports = {
  devtool: 'eval',
  resolve: {
    extensions: [ '.js', '.jsx', '.json' ],
    plugins: [ new DirectoryNamedWebpackPlugin(true) ],
    alias: {
      components: path.resolve(__dirname, 'src/components/'),
      styles: path.resolve(__dirname, 'src/styles/'),
      assets: path.resolve(__dirname, 'src/assets'),
      utils: path.resolve(__dirname, 'src/utils')
    }
  },
  node: { fs: 'empty', net: 'empty' },
  module: {
    rules: [
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpg|jpeg|png|gif)$/, use: 'url-loader' },
      { test: /\.svg$/, use: 'svg-sprite-loader' },
      {
        // For pure CSS (without CSS modules)
        test: /\.scss$/i,
        exclude: /\.module\.scss$/i,
        use: [
          'style-loader',
          { loader: 'css-loader', options: { importLoaders: 2 } },
          'resolve-url-loader',
          'sass-loader'
        ],
      },
      {
        // For CSS modules
        test: /\.module\.scss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: { localIdentName: 'gfw__[name]_[local]' }
            },
          },
        ],
      },
    ]
  },
  plugins: []
};