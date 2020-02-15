const router = require("express").Router();
const stocksController = require("../../controllers/stocksController");

router.route("/")
  .get(stocksController.findAll)
  .post(stocksController.create);

router.route("/:id")
  .put(stocksController.update)
  .delete(stocksController.delete);

module.exports = router;