const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cardsRouter = require('./routes/cards');
const gamesRouter = require("./routes/games");
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

// Use the tarot router for /api routes
app.use('/cards', cardsRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
