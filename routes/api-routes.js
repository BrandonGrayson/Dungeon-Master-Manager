const db = require("../models/");

module.exports = function(app) {
  app.get("/api/games", (req, res) => {
    console.log(db.game);
    db.game.findAll({}).then(dbGames => {
      res.json(dbGames);
    });
  });

  app.get("/api/:gamesid/characters", (req, res) => {
    db.characters
      .findAll({
        where: {
          id: req.params.gamesid
        }
      })
      .then(dbCharacters => {
        res.json(dbCharacters);
      });
  });
};
