import(/* webpackChunkName: "chunk1" */ "./lib.js").then((lib) => {
  lib.method1();
});

import(/* webpackChunkName: "chunk2" */ "./lib.js").then((lib) => {
  lib.method2();
});
