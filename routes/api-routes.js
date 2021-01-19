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

  app.get("/api/:gameid/Characters/:name", (req, res) => {
    db.Characters.findAll({
      where: {
        name: req.params.name
      }
    }).then(dbCharacters => {
      res.json(dbCharacters);
    });
  });

  app.post("/api/:gameid/characters", req => {
    console.log(req.body);
    db.Characters.create({
      // id: req.body.id,
      name: req.body.name,
      race: req.body.race,
      class: req.body.class,
      alignment: req.body.alignment,
      strength: req.body.strength,
      dexterity: req.body.dexterity,
      constitution: req.body.constitution,
      intelligence: req.body.intelligence,
      wisdom: req.body.wisdom,
      charisma: req.body.charisma,
      GameId: req.body.gameid
    }).then(dbCharacters => {
      console.log("New Character:" + dbCharacters);
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
