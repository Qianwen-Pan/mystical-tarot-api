const games = require("../data/games.json");

const getGames = (req, res) => {
  try {
    const responseData = games.map(game => {
        const { id, name, title, subTitle, image,  isLocked} = game;
        return { id, name, title, subTitle, image, isLocked };
      });
      res.status(200).json(responseData);
  } catch (error) {
    res.status(500).send("Server Error");
  }
};

const getSpecificGame = (req, res) => {
    try {
        const responseData = games.map(game => {
            const { id, name, title, subTitle, image,  isLocked} = game;
            return { id, name, title, subTitle, image, isLocked };
          });
          res.status(200).json(responseData);
      } catch (error) {
        res.status(500).send("Server Error");
      }
}



module.exports = {
    getGames,
    getSpecificGame
};
