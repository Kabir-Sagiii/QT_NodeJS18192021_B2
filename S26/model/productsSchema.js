var mongoose = require("mongoose");

var ProductSchema = new mongoose.Schema({
  brandName: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

var Product = mongoose.model("product", ProductSchema);

module.exports = Product;
