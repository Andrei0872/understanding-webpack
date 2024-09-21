const path = require("path");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  context: path.join(__dirname),
  entry: {
    entry1: "./entry1.js",
    "lib-entry": "./lib.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  optimization: {
    mergeDuplicateChunks: true,
  },
  mode: "none",
};

module.exports = config;
