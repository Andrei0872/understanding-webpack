const path = require('path');

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
  },
  mode: 'none'
};

module.exports = config;