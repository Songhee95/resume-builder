var express = require("express");
const db = require("../models");
var router = express.Router();
var isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function (req, res) {
  if (req.user) {
    res.render("index");
  }
  res.render("homePage");
});
router.get("/login", function (req, res) {
  res.render("login", {
    style: "login.css",
  });
});
router.get("/signin", function (req, res) {
  res.render("signin");
});
router.get("/logout", function (req, res) {
  req.logout();
  res.redirect("/");
});
router.get("/index", isAuthenticated, function (req, res) {
  res.render("index", req.user);
});

router.get("/newResume", (req, res) => {
  res.render("form");
});

//uncomment this code to view the template
// router.get("/template", (req, res)=>{
//     res.render("templateOne")
// })

router.get("/:resumeId", (req, res) => {
  db.Resume.findOne({
    where: {
      id: req.params.resumeId,
    },
  }).then((resume) => {
    res.render("formEdit", resume.dataValues);
  });
  // res.render('templateTwo', req.body);
});
//not sure what goes into the specific resume update form
router.get("/templateOne/:resumeId", (req, res) => {
  db.Resume.findOne({
    where: {
      id: req.params.resumeId,
    },
  }).then((resume) => {
    res.render("custom", resume.dataValues);
  });
  // res.render('templateTwo', req.body);
});
module.exports = router;
