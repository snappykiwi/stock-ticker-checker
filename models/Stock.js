const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stockSchema = new Schema({
  symbol: {
    type: String
  },
  price: {
    type: Number
  },
  time: {
    type: Number
  },
  show: {
    type: Boolean
  },
  pastStats: [{
    price: {
      type: Number
    },
    time: {
      type: Number
    }
  }]
});

const Stock = mongoose.model("Stock", stockSchema);

module.exports = Stock;