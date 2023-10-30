const path = require("path");

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  mode: "production",
  entry: {
    main: "./src",
  },
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
          minSize: 10,
          test: /node_modules/,
        },
      },
    },
  },
  context: __dirname,
};

module.exports = config;
