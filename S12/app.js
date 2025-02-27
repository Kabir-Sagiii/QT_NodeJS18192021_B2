const express = require("express");
const app = express();

app.get("/text", (request, response) => {
  response.send("My first API using Express : ---------");
}); //http://localhost:7979/text

app.get("/htmltag", (req, res) => {
  res.send("<h2>Welcome to express</h2>");
}); //http://localhost:7979/htmltag

app.listen(7979, () => {
  console.log("Server Started on Port Number 7979");
});
