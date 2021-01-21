//================REQUIRED NODE PACKAGES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
const bcrypt = require('bcrypt');
const passport = require("passport");
const initializePassport = require("./config/passport")
initializePassport(passport);
const exphbs = require("express-handlebars");

//==============HANDLEBARS

//===============AUTHENTICATION
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
app.use(express.urlencoded({
  extended: false
}));
app.get('/', (req, res) => {
  res.render('index', )
})
//===============MIDDLEWARE
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());
app.use(passport.session());

//============ROUTES
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);
require("./routes/auth-routes")(app)

//===========SYNC DATABASE
db.sequelize.sync({force: true}).then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});