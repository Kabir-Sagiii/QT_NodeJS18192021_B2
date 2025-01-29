const fs = require("fs");

fs.readFile("home.html", "utf-8", (error, data) => {
  if (error) {
    console.log("failed to access the content of file");
  } else {
    console.log(data);
  }
});
