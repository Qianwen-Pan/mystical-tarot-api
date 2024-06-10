const express = require('express');
const router = express.Router();
const tarotController = require('../controllers/cardController');

router.route("/")
        .get(tarotController.getAllCards); 

module.exports = router;
