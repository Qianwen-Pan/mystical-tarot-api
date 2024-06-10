const express = require("express");
const router = express.Router();
const gameController = require("../controllers/gameController");

router.route("/").get(gameController.getGames);

router.route("/:id").get(gameController.getSpecificGame);

module.exports = router;
