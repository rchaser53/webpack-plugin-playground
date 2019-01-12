const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HelloworldPlugin = require('./src');

module.exports = {
  mode: "development",
  context: path.resolve(__dirname, "./test"),
  devtool: "inline-source-map",
  entry: {
    index: "./index.ts"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/public/",
    filename: "bundle.js"
  },
  resolve: {
    extensions: [".html", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loaders: ["ts-loader"],
        include: path.join(__dirname, "test"),
        exclude: [/node_modules/]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
    }),
    new HelloworldPlugin(),
  ]
};