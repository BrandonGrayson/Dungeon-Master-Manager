// let path = require("path");
// Routes

// =========================================
module.exports = function(app) {
  app.get("/", (req, res) => {
    // console.log("Made it here!")
    res.render("index");
  });

  app.get("/create", (req, res) => {
    res.render("creation");
  });

  app.get("/member", (req, res) => {
    res.render("members");
  });

  app.get("/howTo", (req, res) => {
    res.render("howTo")
  })
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
