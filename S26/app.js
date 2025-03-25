var express = require("express");
var cors = require("cors");
var createConnection = require("./config/connection");
var Product = require("./model/productsSchema");
var app = express();

app.use(cors());
app.use(express.json());

app.get("/api/get", (req, res) => {
  Product.find()
    .then((data) => {
      res.send({
        ok: true,
        length: data.length,
        message: "successful",
        results: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        message: "failed to fetch data",
        results: null,
      });
    });
});
//http://localhost:5656/api/get

app.post("/api/post", (req, res) => {
  res.send("post request");
});

app.listen(5656, () => {
  createConnection();
  console.log("server started and connected with db");
});
