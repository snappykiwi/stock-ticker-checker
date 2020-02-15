const db = require('../models');

module.exports = {

  findAll: function (req, res) {
    db.Stock.find()
      .then(dbStocks => res.json(dbStocks))
      .catch(err => res.status(500).json(err))
  },

  create: function (req, res) {
    db.Stock.create(req.body)
      .then(dbStock => {
        console.log(dbStock);
      })
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