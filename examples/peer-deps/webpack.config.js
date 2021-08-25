const path = require('path');

const PreventFontsFromPeerDeps = {
  apply (resolver) {
    const beforeFinalFile = resolver.getHook('before-final-file');
    
    let peerDepsFromMainRepo;
    beforeFinalFile.tap("PreventFontsFromPeerDeps", (request, resolveContext) => {
      if (!peerDepsFromMainRepo) {
        peerDepsFromMainRepo = request.descriptionFileData.peerDependencies;

        return;
      }

      const { path } = request;
      
      // const isFont = /* ... */;
      const isFromPeerDeps = Object.keys(peerDepsFromMainRepo).some(k => path.includes(`node_modules/${k}`));
      if (isFromPeerDeps) {
        return { path: false };
      }
    });
  },
};

/**
 * @type {import("webpack/types").Configuration}
 */
const config = {
  entry: path.join(__dirname, 'src'),
  output: {
    path: path.join(__dirname, 'dist'),
  },
  mode: 'none',

  resolve: {
    plugins: [PreventFontsFromPeerDeps]
  },
};

module.exports = config;