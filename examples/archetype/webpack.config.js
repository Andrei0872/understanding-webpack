const path = require("path");

/**
 * @type {import("../../webpack/declarations/WebpackOptions").WebpackOptions}
 */
const config = {
  // context: path.join(__dirname),
  entry: path.join(__dirname),
  output: {
    path: path.join(__dirname, "dist"),
    clean: true,
  },
  mode: "none",
};

module.exports = config;
