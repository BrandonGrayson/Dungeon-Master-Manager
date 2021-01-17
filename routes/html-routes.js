// let path = require("path");

// Routes
// =========================================
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("members");
  });

  app.get("/create", (req, res) => {
    res.render("creation");
  });
};
