const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const tarotRouter = require('./routes/tarot');


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Use the tarot router for /api routes
app.use('/api', tarotRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
