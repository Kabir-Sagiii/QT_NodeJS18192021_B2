const http = require("http");
const fs = require("fs");
let port = 6754;
//Creating Server using http module
const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/html") {
    fs.readFile("Home.html", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to fetch the data from the file");
      } else {
        res.end(data);
      }
    });
  } else if (req.url === "/json") {
    fs.readFile("info.json", "utf-8", (error, data) => {
      if (error) {
        res.end("Failed to fetch the data from the file");
      } else {
        res.end(data);
      }
    });
  }

  //   res.end("Received the request and sending response to you");
  //   res.end("{name:'sagar',city:'hyd'}");
});

//start or run the server
server.listen(port, () => {
  console.log("Server Started");
});
