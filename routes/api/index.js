const router = require("express").Router();
const stocksRoutes = require("./apiRoutes");

router.use("/stocks", stocksRoutes);

module.exports = router;
