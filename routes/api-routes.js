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
  
  

  app.post("/api/new", function(req, res) {
  console.log("REQ BODY---> ", req.body)
  db.Game.create({
    name_of_game: req.body.name_of_game,
    story_line: req.body.story_line
  }).then(function(gameCreated) {
    console.log("GAME CREATED--->", gameCreated)
    res.json(gameCreated)
  })
  
  })
}
