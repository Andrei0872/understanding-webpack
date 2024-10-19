import * as fooDep from "./foo-dep";

export const hello = () => {
  console.log("hello from foo!");

  fooDep.hello();
};
