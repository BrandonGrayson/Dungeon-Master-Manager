//================REQUIRED NODE PACKAGES
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;
const db = require("./models");

//===============MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//==============HANDLEBARS
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//============ROUTES
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

//===========SYNC DATABASE
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log("App listening on PORT " + PORT);
  });
});
