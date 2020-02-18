const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    //sends only the symbol and price fields from the db
    db.Stock.find({},
      { symbol: 1, price: 1 }
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
      $push: {
        pastStats: newPrice
      }
    }, {
      projection: {
        symbol: 1,
        price: 1
      },
      new: true,
      upsert: true
    })
      .then(dbStock => res.json(dbStock))
      .catch(err => res.status(500).json(err))
  },

  update: function (req, res) {
    db.Stock.findByIdAndUpdate(req.params.id)
      .then(dbStock => res.json(dbStock))
      .catch(err => res.status(500).json(err))
  },

  delete: function (req, res) {
    db.Stock.findByIdAndRemove(req.params.id, function (req, res) {
      console.log(res);
    }).catch(err => res.status(500).json(err))
  }

}