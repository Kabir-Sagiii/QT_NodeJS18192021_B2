var promise = new Promise(function (resolve, reject) {
  //x = resolve
  //y = reject
  //   resolve({ name: "sagar", city: "Pune" }); // success data
  reject({ error: "something went wrong" }); //error data
});

// console.log(promise);

promise
  .then(function (success) {
    console.log("then");
    console.log(success);
  })
  .catch(function (error) {
    console.log("catch");
    console.log(error);
  });
