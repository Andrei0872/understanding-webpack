import utils from "./utils.js";

import(/* webpackChunkName: "a" */"./a/a.js").then((a) => {
  console.log(`a: ${a}`);
});

import(/* webpackChunkName: "b" */"./b/b.js").then((b) => {
  console.log(`b: ${b}`);
});

console.log(utils);

