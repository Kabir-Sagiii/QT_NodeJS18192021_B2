const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config({ path: "./config.env" });

const secret_key = process.env.SECRET_KEY;
// const secret_key =
//   "vdkjsbvdjksvbkdjsvbkdjsvbkdjsbvkdjsbvjdksbcdjksbvkdjsbvdjksb";
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const port = process.env.PORT;
const app = express();

//Configuration
app.use(cors());
app.use(express.json());

app.use("/products", productRoute);
//http://localhost:8989/products/getdata
//http://localhost:8989/products/newproduct

app.use("/users", userRoute);
//htpp://localhost:8989/users/getusers
//htpp://localhost:8989/users/getoneusers

app.get("/login", (req, res) => {
  //access the user credentials

  //connect with database and check user is valid or not

  //create a jwt token
  const token = jwt.sign({ name: "sagar", password: 1234 }, secret_key);

  res.send({
    ok: true,
    result: token,
  });
}); //http://localhost:8989/login

app.listen(port, () => {
  console.log("Server Started", port);
});
