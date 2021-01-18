// let path = require("path");
// const db = require("../models");
// Routes
const db = require("../models/");
// =========================================
<<<<<<< HEAD

module.exports = function (app) {
=======
module.exports = function(app) {
>>>>>>> 1dc93f3da63012356893577de65d2f2c3aa875f6
  app.get("/", (req, res) => {
    res.render("members");
  });

  app.get("/create", (req, res) => {
    res.render("creation");
  });

  app.get("/member", (req, res) => {
    res.render("members");
  });

  app.get("/games", (req, res) => {
    console.log(db.game);
    db.game.findAll({}).then(dbGames => {
      res.json(dbGames);
    });
  });
<<<<<<< HEAD
};
=======
};

// app.get("/api/games/", (req, res) => {
//   db.games.findAll({}).then(dbGames => {
//     res.json(dbGames);
//   });
// });

// app.get("/api/:gameid/characters", (req, res) => {
//   db.character.findAll({
//     where: {
//       game_id: req.params.gameid
//     }
//   })
//     .then(dbCharacters => {
//       res.json(dbCharacters);
//     });
// })
>>>>>>> 1dc93f3da63012356893577de65d2f2c3aa875f6
