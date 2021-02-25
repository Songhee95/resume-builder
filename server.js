const express = require("express");
const exphbs = require("express-handlebars");
const handlebars = require("handlebars");
// const puppeteer = require('puppeteer');
const fs = require("fs");
const passport = require("./config/passport");
const session = require("express-session");

const {
  allowInsecurePrototypeAccess,
} = require("@handlebars/allow-prototype-access");

const db = require("./models");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    handlebars: allowInsecurePrototypeAccess(handlebars),
  })
);
app.set("view engine", "handlebars");

//user authentication
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

//ROUTES

//add Views routes
require("./routes/api-routes.js")(app);
var routes = require("./routes/view-routes.js");
app.use(routes);

//add API routes

//uncomment this when sequelize is set up
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});

// const seed = require('./seeds');
// function runSeed() {
//     seed.addUser();
//     seed.addResume();
//     // seed.addEducation();
//     // seed.addExperience();
//     // seed.addProject();

// }
// runSeed();
