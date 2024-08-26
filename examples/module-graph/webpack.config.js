const path = require("path");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  context: path.join(__dirname),
  entry: {
    entry1: "./entry1.js",
  },
  output: {
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  mode: "none",
};

module.exports = config;
