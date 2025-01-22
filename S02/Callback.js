function f1(p1, p2, p3) {
  p1();
  console.log("f1 is called");
  //call f2 function
  p1();
}

function f2() {
  console.log("f2 is called");
}

f1(
  f2,
  function () {},
  () => {}
);
