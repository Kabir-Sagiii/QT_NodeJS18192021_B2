const express = require("express");
const cors = require("cors");
const fs = require("fs");

const port = 8978;
const app = express();

//Configuation of cors in express app
//Cors is considered as a Middleware for express app
app.use(cors());

//To access the client data using req.body property
app.use(express.json());

app.post("/user", (req, res) => {
  const user = req.body;

  fs.readFile("data.json", "utf-8", (error, filedata) => {
    if (error) {
      res.send({
        ok: false,
        result: "Failed to access the data from the file",
      });
    } else {
      let data = JSON.parse(filedata);
      data.data.push(user);
      fs.writeFile("data.json", JSON.stringify(data), (error) => {
        if (error) {
          res.send({
            ok: false,
            result: "Failed to Register the User",
          });
        } else {
          res.send({ ok: true, result: "User Registered Successfully" });
        }
      });
    }
  });
}); //http://localhost:8978/user

app.listen(port, () => {
  console.log("Server Started");
});
