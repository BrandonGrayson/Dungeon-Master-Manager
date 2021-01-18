const db = require("../models/");

module.exports = function(app) {
  app.get("/api/games/", (req, res) => {
    db.Game.findAll({}).then(dbGames => {
      res.json(dbGames);
    });
  });

  app.get("/api/:gameid/Characters", (req, res) => {
    db.Characters.findAll({
      where: {
        id: req.params.gameid
      }
    }).then(dbCharacters => {
      res.json(dbCharacters);
    });
  });
  
  

  // app.post("/api/create", function(app) {
  //   db.characters.create({
  //     game_id: ,


  //   })
  // })

};
