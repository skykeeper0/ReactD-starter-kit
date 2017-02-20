const webpack = require('webpack');
const path = require('path');

module.exports = {
    entry: './main.js', // name of the top level file you want to include
    output: {
        filename: 'bundle.js' // the file you want webpack to build
    },
    // watch: true, // watch your files and when one of them changes, it will
    // immediately rerun the build and recreate the output files
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
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

