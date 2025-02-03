const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("products.json", "utf-8", (err, data) => {
    if (err) {
      res.end("Failed to fetch the data");
    } else {
      res.end(data);
    }
  });
});

server.listen(5656, () => {
  console.log("Server is Started");
});
//http://localhost:5656
