var express = require("express");
var router = express.Router();

var search = require("./search.js");

// index
router.get("/", search.getAllHotels);

module.exports = router;