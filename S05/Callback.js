function f1(fn) {
  console.log("1");
  console.log("2");
  console.log("3");
  fn();
  console.log("4");
  console.log("5");
  console.log("6");
}

function f2() {
  console.log("a");
  console.log("b");
  console.log("c");
}

f1(f2);
