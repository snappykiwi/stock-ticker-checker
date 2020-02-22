const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    //sends only the symbol and price fields from the db
    db.Stock.find({
      show: true
    }
      // { symbol: 1, price: 1 }
    ).sort({ symbol: 1 })
      .then(dbStocks => res.json(dbStocks))
      .catch(err => res.status(500).json(err))
  },

  create: function (req, res) {
    const newPrice = {
      price: req.body.price,
      time: req.body.time
    }

    db.Stock.findOneAndUpdate({
      symbol: req.body.symbol
    }, {
      ...newPrice,
      show: true,
      $addToSet: {
        pastStats: newPrice
      }
    }, {
      new: true,
      upsert: true
    })
      .then(dbStock => res.json(dbStock))
      .catch(err => res.status(500).json(err))
  },

  remove: function (req, res) {
    db.Stock.findByIdAndUpdate(req.params.id,
      {
        show: false
      }, {
      new: true
    },
      function (err, response) {
        console.log(response);

        if (err) {
          return res.status(500).json(err);
        }
        else {
          return res.json(response);
        }
      })
  }

}