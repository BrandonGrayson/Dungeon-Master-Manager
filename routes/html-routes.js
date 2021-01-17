// let path = require("path");

// Routes
// =========================================
module.exports = function(app) {
  app.get("/", (req, res) => {
    res.render("members");
<<<<<<< HEAD
=======
  });

  app.get("/create", (req, res) => {
    res.render("creation");
>>>>>>> 3e705d844998a463f0feefe087f15fcd387b7fa2
  });
};
