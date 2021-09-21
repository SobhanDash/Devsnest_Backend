var express = require("express");
const { routes } = require("../app");
var router = express.Router();
var registerInitChecks = require("../middlewares/registerChecks");
var register = require("../controllers/register");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});
/**
 * @params {*} req
 * @params {*} res
 * @params {*} next
 * @requires {email, password, confirmPassword} - req.body
 * @description
 * Security, Performance & Edge Cases - 3 things to keep in mind while building api
 * Level - 2
 * JS/SQL - THA
 *
 */

router.post("/register", registerInitChecks, register);

module.exports = router;
