const path = require("path");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  context: path.join(__dirname),
  entry: {
    index: "./index.js",
    "utils-entry": "./utils.js",
  },
  optimization: {
    mergeDuplicateChunks: false,
  },
  output: {
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  mode: "none",
};

module.exports = config;
