const fs = require("fs");
//here fs is a object

//1.create a new file
fs.open("my.txt", "w", (error) => {
  if (error) {
    console.log("Failed to create file");
    console.log(error);
  } else {
    console.log("Successfully created the file");
  }
});

fs.writeFile("Products.jsx", "", (error) => {
  if (error) {
    console.log("Failed to create a file");
  } else {
    console.log("successfully created the file");
  }
});
