const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: [
        path.join(__dirname, './main.js')
    ],
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js' 
    },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.css|\.scss)$/,
        loaders: ['style', 'css', 'sass']
      }

    ],
  },
  stats: {
    colors: true,
  },
  watch: true,
  node: {
    console: false,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
}

