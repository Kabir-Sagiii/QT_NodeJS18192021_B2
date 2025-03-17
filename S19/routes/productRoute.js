var express = require("express");
var route = express.Router();
var createConnection = require("../config/connection");

route.get("/getdata", async (req, res) => {
  const productsColl = await createConnection();

  productsColl
    .find({})
    .toArray()
    .then((data) => {
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch((error) => {
      res.json({
        ok: false,
        result: "Something went wrong while accessing the data",
      });
    });
}); //http://localhost:8989/getdata

route.post("/newproduct", async (req, res) => {
  const newProduct = req.body;
  try {
    const productsColl = await createConnection();
    const data = await productsColl.insertOne(newProduct);

    res.send({
      ok: true,
      result: "inserted successfully",
      data: data,
    });
  } catch (error) {
    res.send({
      ok: false,
      result: "something went wrong",
    });
  }
}); //http://localhost:8989/newproduct

module.exports = route;
