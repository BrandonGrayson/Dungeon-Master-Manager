// =========================================
module.exports = function (app) {
  app.get("/", (req, res) => {
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

  app.get("/login", (req, res) => {
    res.render("login")
  })

};