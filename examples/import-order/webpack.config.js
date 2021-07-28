const path = require('path');
const fs = require('fs');

const DetectShadowingPlugin = {
  apply (resolver) {
    const beforeResolved = resolver.getHook('before-resolved');

    // `cb`- refers to the next `tap` function in the chain
    beforeResolved.tapAsync('DetectShadowingPlugin', (req, ctx, cb) => {
      // To inspect the hook's chain until this moment, see `ctx.stack`(from top to bottom)
      // console.log(ctx);
      
      // The `path` will give us the full path for the file we're looking for
      const { path: filePath } = req;
      
      const ext = path.extname(filePath);
      if (ext !== '.js') {
        // Continuing the process
        return cb();
      }

      const fileName = path.basename(filePath, path.extname(filePath)); // https://stackoverflow.com/a/19811573/9632621
      const possibleDirectoryPath = path.resolve(filePath, '..', fileName);
      fs.access(possibleDirectoryPath, err => {
        if (!err) {
          const message = `Apart from the file ${filePath}, there is also a directory ${possibleDirectoryPath}`;
          cb(new Error(message));
          
          return;
        }

        cb();
      });
    });
  },
};

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  entry: path.join(__dirname),
  output: {
    path: path.join(__dirname, 'dist'),
  },

  mode: 'none',

  resolve: {
    plugins: [DetectShadowingPlugin]
  },
};

module.exports = config;