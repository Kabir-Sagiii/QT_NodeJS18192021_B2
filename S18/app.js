const express = require("express");
const cors = require("cors");
const createConnection = require("./config/connection");

const port = 8989;
const app = express();

//Configuration
app.use(cors());
app.use(express.json());

app.get("/getdata", async (req, res) => {
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

app.post("/newproduct", async (req, res) => {
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

app.listen(port, () => {
  console.log("Server Started");
});
