const path = require("path");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  entry: path.join(__dirname),
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
