// Requiring necessary npm packages
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// const db = require("./models");
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
// Creating express app and configuring middleware needed for authentication

// requiring our routes
require("./routes/html-routes.js")(app);

// Syncing our database and logging a message to the user upon success
app.listen(PORT, () => {
  console.log(
    "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
    PORT
  );
});
