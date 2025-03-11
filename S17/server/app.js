const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);
const port = 8989;
const app = express();

//Configuration
app.use(cors());
app.use(express.json());

app.get("/getdata", (req, res) => {
  //connect with the Mongodb server
  client
    .connect()
    .then((resp) => {
      console.log("Connected Successfuly to Mongodb server");
    })
    .catch((error) => {
      console.log("failed to connect with server");
      console.log(error);
    });

  //to connect with database
  const db = client.db("db18to21");

  //to connect with collection
  const coll = db.collection("products");

  //to access the documents from collection
  coll
    .find({})
    .toArray()
    .then((data) => {
      //   console.log(data);
      res.json({
        ok: true,
        results: data,
      });
    })
    .catch((error) => {
      //   console.log("error while accessing the data");
      res.json({
        ok: false,
        result: "Something went wrong while accessing the data",
      });
    });
}); //http://localhost:8989/getdata

app.listen(port, () => {
  console.log("Server Started");
});
