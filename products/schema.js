const mongoose = require("mongoose");

const Product = new mongoose.Schema({
  // merchantId (ObjectId) - Reference to the merchant
  title: String,
  category: String,
  description: String,
  order: Number,
  price: Number,
  image: Array,
  discount: Number,
});

const products = mongoose.model("products", Product);
module.exports = products;
