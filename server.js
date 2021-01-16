// Requiring necessary npm packages
const express = require("express");
var exphbs = require("express-handlebars");

// Requiring passport as we've configured it

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const app = express();
// const db = require("./models");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Creating express app and configuring middleware needed for authentication

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status

//Requiring our routes
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
    );
});


