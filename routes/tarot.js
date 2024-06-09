const express = require('express');
const router = express.Router();

// Define your routes here
router.get('/tarot', (req, res) => {
    res.json({ message: 'Tarot reading route' });
});

module.exports = router;
