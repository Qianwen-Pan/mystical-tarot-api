const cards = require("../data/cards.json");

const getAllCards = (req, res) => {
  try {
    res.status(200).json(cards);
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
    getAllCards
};
