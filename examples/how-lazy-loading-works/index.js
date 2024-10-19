import * as localLib from "./local-lib.js";
import * as foo from "./foo.js";

console.log("hello from index file");

localLib.hello();
foo.hello();

window.onload = () => {
  const button = document.createElement("button");
  button.innerHTML = "click for lazy loading";

  document.body.appendChild(button);

  button.onclick = () => {
    import(/* webpackChunkName: "chunk1" */ "./async-lib.js").then((lib) => {
      lib.foo();
    });
  };
};

