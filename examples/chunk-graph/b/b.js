import utils from "../utils.js";

import(/* webpackChunkName: "b1" */"./b1.js").then((b1) => {
  console.log(`b1: ${b1}`);
});

export default "b" + utils;
