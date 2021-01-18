// let path = require("path");

// Routes
// =========================================

module.exports = function (app) {
  app.get("/", (req, res) => {
    res.render("index");
  });
};