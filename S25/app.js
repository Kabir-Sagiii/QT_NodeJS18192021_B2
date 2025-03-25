const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config({ path: "./config.env" });

const userRoute = require("./routes/userRoute");
const port = process.env.PORT;
const app = express();

//Configuration
app.use(cors());
app.use(express.json());

function createMongooseConnection() {
  mongoose
    .connect("mongodb://localhost:27017/db18to21")
    .then(() => {
      console.log("Connected Successfully");
    })
    .catch((error) => {
      console.log(error);
      console.log("Error while connecting");
    });
}

createMongooseConnection();

app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log("Server Started", port);
});
