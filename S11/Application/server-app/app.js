const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-origin", "*");

  const urlpath = req.url;

  if (urlpath === "/create") {
    fs.writeFile("home.java", "", (error) => {
      if (error) {
        res.end("Failed to create File");
      } else {
        // res.end("Successfully Created the File");
        res.end(JSON.stringify({ name: "File Created" }));
      }
    });
  } else if (urlpath === "/remove") {
    fs.unlink("home.java", (error) => {
      if (error) {
        res.end("Failed to remove the file");
      } else {
        res.end("File Removed");
      }
    });
  }
});

server.listen(4545, () => {
  console.log("Server started on", 4545, "Port Number");
});

//http://localhost:4545/create  : file should be created

//http://localhost:4545/remove  : file should be removed
