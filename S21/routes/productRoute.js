var express = require("express");
var route = express.Router();
var createConnection = require("../config/connection");
const { ObjectId } = require("mongodb");
const jwt = require("jsonwebtoken");
const secret_key =
  "vdkjsbvdjksvbkdjsvbkdjsvbkdjsbvkdjsbvjdksbcdjksbvkdjsbvdjksb";

route.get(
  "/getdata",
  (req, res, next) => {
    var token = req.headers.authorization.slice;
    console.log(token);
    //access the token from request and assign to token variable

    jwt.verify(token, secret_key, (error) => {
      if (error) {
        res.send({
          ok: false,
          result: "invalid token",
        });
      } else {
        next();
      }
    });
  },
  async (req, res) => {
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
  }
); //http://localhost:8989/products/getdata

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
}); //http://localhost:8989/products/newproduct

route.put("/update", async (req, res) => {
  var id;
  var newPrice;
  var rating;

  id = req.body.id;
  newPrice = req.body.price;
  newrating = req.body.rating;

  var collection = await createConnection();

  collection
    .updateOne(
      { _id: new ObjectId(id) },
      { $set: { rating: newrating, price: newPrice } }
    )
    .then((resp) => {
      res.send({
        ok: true,
        result: "Updated Successfully",
      });
    })
    .catch((error) => {
      res.send({
        ok: false,
        result: "Failed to Update",
      });
    });
}); //http://localhost:8989/products/update

route.delete("/remove", async (req, res) => {
  var id = req.body.id;

  const collection = await createConnection();

  collection
    .deleteOne({ _id: new ObjectId(id) })
    .then(() => {
      res.send({
        ok: true,
        result: "Deleted",
      });
    })
    .catch(() => {
      res.send({
        ok: false,
        result: "failed to delete",
      });
    });
}); // //http://localhost:8989/products/remove

module.exports = route;
