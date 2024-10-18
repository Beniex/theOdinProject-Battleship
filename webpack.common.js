const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'src/index.js'),
},
  plugins: [
    new HtmlWebpackPlugin({
      title: 'theOdinProject-Template',
      template: './src/index.html',
      favicon: './src/favicon.ico',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  }, 
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    publicPath: '/theOdinProject-Template/',
  },
};