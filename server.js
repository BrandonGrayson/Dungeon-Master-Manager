//================REQUIRED NODE PACKAGES
const express = require("express");
const app = express();
<<<<<<< HEAD
// const db = require("./models");
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");
// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({
  extended: true
}));
=======
const PORT = process.env.PORT || 8080;
const db = require("./models");

//===============MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
>>>>>>> 1dc93f3da63012356893577de65d2f2c3aa875f6
app.use(express.json());
app.use(express.static("public"));

//==============HANDLEBARS
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//============ROUTES
require("./routes/html-routes.js")(app);
// Syncing our database and logging a message to the user upon success
<<<<<<< HEAD
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT
  );
});
=======

//===========AUTHENTICATE DATABASE
// db.authenticate()
//   .then(() => console.log("Connected to Database"))
//   .catch(err => console.log("ERROR:" + err));

//===========SYNC DATABASE
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
>>>>>>> 1dc93f3da63012356893577de65d2f2c3aa875f6
