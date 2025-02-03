function createFile() {
  var promiseData = fetch("http://localhost:4545/create");

  promiseData
    .then((successdata) => {
      alert("s");
      return successdata.json();
    })
    .then((data) => {
      alert("w");
      console.log(data);
    })
    .catch((errordata) => {});
}

function removeFile() {
  alert("removed");
}
