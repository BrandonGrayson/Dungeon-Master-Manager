// Requiring necessary npm packages
const express = require("express");
var exphbs = require("express-handlebars");

// Requiring passport as we've configured it
// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
// const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

app.engine("handlebars", exphbs({defaultLayout: "main"}));
app.set("view engine", "handlebars");
// We need to use sessions to keep track of our user's login status

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// requiring our routes
require("./routes/html-routes.js")(app);
//Requiring our routes
// Syncing our database and logging a message to the user upon success
// db.sequelize.sync().then(() => {
//   app.listen(PORT, () => {
//     console.log(
//       "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
//       PORT,
//       PORT
//     );
//   });
// });
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
