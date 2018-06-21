/* eslint-disable */

const path = require("path");
const webpack = require("webpack");
const sharedConfig = require("./webpack.config.shared");
const sharedLoaders = sharedConfig.loaders;

module.exports = {
  devtool: "cheap-module-source-map",
  entry: [
    "babel-polyfill",
    'webpack-hot-middleware/client',
    "react-hot-loader/patch",
    "./index"
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    // publicPath: "/dist",
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    ...sharedConfig.plugins,
  ],
  module: {
    loaders: [
      ...sharedLoaders,
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        include: __dirname
      },
      {
        test: /\.css$/,
        loaders: ["style-loader", "raw-loader"],
        include: __dirname
      },
      {
        test: /\.svg$/,
        loader: "url-loader?limit=10000&mimetype=image/svg+xml",
        include: path.join(__dirname, "assets"),
        exclude: path.join(__dirname, "assets/fonts")
      },
      {
        test: /\.png$/,
        loader: "url-loader?mimetype=image/png",
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.gif$/,
        loader: "url-loader?mimetype=image/gif",
        include: path.join(__dirname, "assets")
      },
      {
        test: /\.jpg$/,
        loader: "url-loader?mimetype=image/jpg",
        include: path.join(__dirname, "assets")
      }
    ]
  }
};
