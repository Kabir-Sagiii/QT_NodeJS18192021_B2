var express = require("express");
var route = express.Router();

route.get("/getusers", (req, res) => {
  res.send("<h2>USer Details</h2>");
});

route.get("/getoneuser", (req, res) => {
  res.send("<h2>One User Info </h2>");
});

module.exports = route;
