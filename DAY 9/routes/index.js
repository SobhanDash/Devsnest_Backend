var express = require("express");
var router = express.Router();
var path = require("path");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.sendFile(path.join(__dirname, "../public/images/icon.png"));
  // res.render("index", { title: "Express" });
});

console.log(__dirname);
router.get("/file", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/images/home.jpg"));
});

module.exports = router;
