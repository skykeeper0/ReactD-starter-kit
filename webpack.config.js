const webpack = require('webpack');
const path = require('path');

module.exports = {
    // name of the top level file you want to include
    entry: [
      path.join(__dirname, 'client', 'src', 'index.js'),
    ],
    // the file you want webpack to build
    output: {
      path: path.join(__dirname, 'client', 'public'),
      filename: 'bundle.js',
    },
    // watch: true, // watch your files and when one of them changes, it will
    // immediately rerun the build and recreate the output files
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

