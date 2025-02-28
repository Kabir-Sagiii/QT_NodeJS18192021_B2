const express = require("express");
const fs = require("fs");
const port = 8978;
const app = express();

app.get("/text", (req, res) => {
  res.send("Text Response");
}); //http://localhost:8978/text

app.get("/html", (req, res) => {
  fs.readFile("Home.html", "utf-8", (error, data) => {
    if (error) {
      res.send("<h2>Failed to read the content of the file</h2>");
    } else {
      res.send(data);
    }
  });
});
//http://localhost:8978/html

app.post("/newuser", (req, res) => {});
//localhost:8978/newuser

http: app.put("/update", (req, res) => {});
//localhost:8978/update

http: app.delete("/remove", (req, res) => {});
//localhost:8978/remove

http: app.listen(port, () => {
  console.log("Server Started");
});
