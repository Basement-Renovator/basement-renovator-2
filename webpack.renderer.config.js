/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const getBaseConfig = require("./webpack.base.config");

const ELECTRON_TYPE = "renderer";

const webpackConfig = getBaseConfig(ELECTRON_TYPE);

webpackConfig.plugins = [
  new HtmlWebpackPlugin({
    template: path.join("static", "index.html"),
  }),
];

module.exports = webpackConfig;
