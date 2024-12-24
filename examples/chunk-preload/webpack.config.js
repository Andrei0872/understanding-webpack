const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  context: path.join(__dirname),
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  mode: "none",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};

module.exports = config;
