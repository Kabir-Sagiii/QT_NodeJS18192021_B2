const fs = require("fs");

fs.rename("Products.jsx", "ProductFile.js", (error) => {
  if (error) {
    console.log("Failed to rename the file");
  } else {
    console.log("renamed file successfully");
  }
});
