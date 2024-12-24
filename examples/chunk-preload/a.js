export const aFn = () => {
  console.log("aFn invoked!");
};

document.querySelector("#demoA1").addEventListener("click", () => {
  import(/* webpackChunkName: 'a1', webpackPreload: true */ "./a1").then((m) =>
    m.a1Fn(),
  );
});

console.log("a");
