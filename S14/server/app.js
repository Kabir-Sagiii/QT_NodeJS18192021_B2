const express = require("express");

const port = 8978;
const app = express();

app.post("/user", (req, res) => {}); //http://localhost:8978/user

app.listen(port, () => {
  console.log("Server Started");
});
