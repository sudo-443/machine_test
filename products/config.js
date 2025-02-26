const mongoose = require("mongoose");

const mongoConnect = (uri) => {
  mongoose.connect(uri).then((data) => console.log("mongo connected"));
};

module.exports = mongoConnect;
