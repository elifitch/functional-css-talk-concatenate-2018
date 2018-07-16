/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const sharedConfig = require("./webpack.config.shared");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: [
    "babel-polyfill",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist/"
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": JSON.stringify("production")
      }
    }),
    new UglifyJSPlugin(),
    ...sharedConfig.plugins
  ],
  module: {
    loaders: [
      ...sharedConfig.loaders,
      {
        test: /\.(js|jsx)$/,
        // exclude: /node_modules/,
        exclude: /node_modules(?!\/gsap)/,
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml"
      }
    ]
  }
};
