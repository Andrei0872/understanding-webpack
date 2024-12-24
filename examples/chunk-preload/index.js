document.querySelector("#demoA").addEventListener("click", () => {
  import(/* webpackChunkName: 'a', webpackPreload: true */ "./a.js").then(
    (m) => m.aFn(),
  );
});

document.querySelector("#demoB").addEventListener("click", () => {
  import(/* webpackChunkName: 'b' */ "./b.js").then((m) => m.bFn());
});

