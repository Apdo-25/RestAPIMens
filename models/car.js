const mongoose = require("mongoose");

const Schema = mongoose.Schema;


//schema for Car
let carSchema = new Schema(
{
  name: {type: String},
  model: {type: String},
  year: {type: Number},
  description: {type: String},
  price: {type: Number},
  inStock: {type: Boolean}

});


module.exports = mongoose.model("Car", carSchema);
