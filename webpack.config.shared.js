/* eslint-disable */
var path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  loaders: [
    {
      test: /\.md$/,
      loader: "html-loader!markdown-loader?gfm=false"
    },
    {
      test: /\.(ttf|eot|woff|svg|woff2)$/,
      loader: "file-loader",
      include: path.join(__dirname, "assets/fonts"),
      options: {
        name: "fonts/[name].[ext]",
      }
    },
    {
      test: /\.(mp4)$/,
      loader: "file-loader",
      include: path.join(__dirname, "assets")
    },
  ],
  plugins: [
    new HtmlWebpackPlugin({
      template: './template.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
  ]
}