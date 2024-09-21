// entry1.js

import(/* webpackChunkName: "chunk1" */ "./lib.js").then((lib) => {
  lib.method1();
});
