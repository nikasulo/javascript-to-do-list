const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
     { 
       test: /\.(s)*css$/i,
       use:[
         {
          loader: 'style-loader'
         },
         {
           loader: 'sass-loader'
         }
       ]
     },
     {
       test: /\.(jpg|png)$/i,
       use:[
         {
           loader: 'url-loader'
         }
       ]
     } 
    ]
  },
  plugin: [
    new HtmlWebpackPlugin({template: './dist/index.html'})
  ]
};