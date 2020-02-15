const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  symbol: {
    type: String
    // required: true
  },
  price: {
    type: String
    // required: true
  }
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;