const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cardsRouter = require('./routes/cards');
const gamesRouter = require("./routes/games");
const cors = require('cors');

dotenv.config();

const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());


app.use('/cards', cardsRouter);
app.use('/games', gamesRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
