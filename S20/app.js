const express = require("express");
const cors = require("cors");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const port = 8989;
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

app.listen(port, () => {
  console.log("Server Started");
});
