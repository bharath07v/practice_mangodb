const mongoose = require("mongoose");

//type of input we are storing in schema
const BrandName = mongoose.Schema({
  brandname: {
    type: String,
    require: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

// now schema was create and now we have to export this schema then only we can use in server.js
module.exports = mongoose.model("brandname", BrandName);
// model accepts two parameter : first parameter is file name like table name and second paramter is schema name
