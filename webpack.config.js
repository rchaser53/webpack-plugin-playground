const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HelloworldPlugin = require('./src');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./test"),
  devtool: "inline-source-map",
  entry: {
    index: "./index.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".html", ".js"]
  },
  module: {
    rules: []
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new HelloworldPlugin(),
  ]
};