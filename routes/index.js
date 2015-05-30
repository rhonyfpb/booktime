var express = require("express");
var router = express.Router();

var search = require("./search.js");

// search
router.get("/", search.getAllHotels);
router.get("/getLocales", search.getAllLocales);

module.exports = router;