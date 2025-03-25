var express = require("express");
var route = express.Router();
var User = require("../model/userSchema");

route.post("/newuser", (req, res) => {
  var user = new User(req.body);

  user
    .save()
    .then((data) => {
      console.log(data);
      res.send({ ok: true, result: "user created" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, result: "user failed" });
    });
});

route.get("/getuser", (req, res) => {
  User.find()
    .then((data) => {
      console.log(data);
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        result: "failed to access",
      });
    });
});

route.put("/updateuser/:id", (req, res) => {
  const id = req.params.id;
  User.updateOne({ _id: id }, req.body)
    .then((data) => {
      console.log(data);
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        result: "failed to update",
      });
    });
});

route.delete("/remove/:id", (req, res) => {
  const id = req.params.id;
  User.deleteOne({ _id: id })
    .then((data) => {
      console.log(data);
      res.send({
        ok: true,
        result: data,
      });
    })
    .catch((error) => {
      console.log(error);
      res.send({
        ok: false,
        result: "failed to delete",
      });
    });
});
module.exports = route;
