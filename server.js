//================REQUIRED NODE PACKAGES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");
const bcrypt = require('bcrypt');
const passport = require("passport");
const initializePassport = require("./config/passport")
initializePassport(passport);
const users = [];
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
  res.render('index.handlebars', )
})
app.get('/login', (req, res) => {
  res.render('login.handlebars', )
})
app.post('/login', (req, res) => {

})
app.get('/register', (req, res) => {
  res.render('register.handlebars', )
})

app.post('/register', checkNotAuthenticated, async (req, res) => {
  console.log(req.body);
  // try {
  console.log("inside of try");
  db.User.create({
    name: req.body.userName,
    email: req.body.userEmail,
    password: req.body.userPassword
  }).then(function () {
    res.redirect('/login')
  }).catch(function (e) {
    console.log("inside of catch", e);
    res.redirect('/register')
  })

  // } catch {

  // }
})

function checkAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next()
  }

  res.redirect('/login')
}

function checkNotAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return res.redirect('/')
  }
  next()
}

//===============MIDDLEWARE
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use(express.static("public"));

//============ROUTES
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//===========SYNC DATABASE
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});