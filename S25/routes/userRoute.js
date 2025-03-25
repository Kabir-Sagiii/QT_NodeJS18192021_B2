var express = require("express");
var route = express.Router();
var User = require("../model/userSchema");

route.post("/create", (req, res) => {
  const newuser = req.body;
  let user = new User(newuser);
  user
    .save()
    .then(() => {
      res.send({ ok: true, result: "User Created" });
    })
    .catch((error) => {
      console.log(error);
      res.send({ ok: false, result: "Failed to Create User" });
    });
});
//http://localhost:6565/api/users/create

route.get("/getusers/:id", (req, res) => {
  User.f
  User.findOne(req.params)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, result: error });
    });
}); //http://localhost:6565/api/users/getusers/102

route.get("/getusers", (req, res) => {
  User.find()
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, result: error });
    });
}); //http://localhost:6565/api/users/getusers

route.put("/update/:id", (req, res) => {
  User.updateOne(req.params, req.body)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, result: error });
    });
});

route.delete("/delete/:id", (req, res) => {
  User.deleteOne(req.params)
    .then((data) => {
      res.send({ ok: true, result: data });
    })
    .catch((error) => {
      res.send({ ok: false, result: error });
    });
});
//http://localhost:6565/api/users/delete/105
module.exports = route;
