const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({template: './dist/index.html'}),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
     { 
       test: /\.(s)*css$/i,
       use: [
          'style-loader', 'css-loader', 'sass-loader'
       ]
     },
     {
        test: /\.(jpg|png)$/i,
        use: [ 
          'url-loader'
        ]
      } 
    ]
  },
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
};