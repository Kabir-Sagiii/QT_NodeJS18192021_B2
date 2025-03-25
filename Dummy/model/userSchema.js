const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  _id: Number,
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
});

var User = mongoose.model("dummy", UserSchema);
module.exports = User;
