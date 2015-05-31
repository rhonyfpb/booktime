var express = require("express");
var router = express.Router();

var search = require("./search.js");

// search
router.get("/", search.getHome);
router.get("/getLocales", search.getAllLocales);
router.post("/search", search.getHotels);

module.exports = router;