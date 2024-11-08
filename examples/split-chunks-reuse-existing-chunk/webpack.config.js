const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: "development",
  entry: {
    main: "./src",
  },
  devtool: false,
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
    clean: true,
  },
  optimization: {
    // Instruct webpack not to obfuscate the resulting code
    minimize: false,
    splitChunks: {
      cacheGroups: {
        cacheGroupFoo: {
          minChunks: 3,
          minSize: 30,
          test: /node_modules/,
          reuseExistingChunk: true,
        },
        default: false,
        defaultVendors: false,
      },
    },
  },
  context: __dirname,
  plugins: [new HtmlWebpackPlugin()],
};

module.exports = config;
