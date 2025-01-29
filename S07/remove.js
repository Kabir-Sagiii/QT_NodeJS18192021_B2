const fs = require("fs");

fs.unlink("File.java", (error) => {
  if (error) {
    console.log("failed to remove the file");
  } else {
    console.log("successfully removed the file");
  }
});
