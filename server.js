var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var app = express();
var handlebars = require("express-handlebars").create({
	defaultLayout: "main"
});

app.engine("handlebars", handlebars.engine);

app.set("view engine", "handlebars");
app.set("port", process.env.PORT || 3000);

app.use(logger("dev"));
app.use(bodyParser.json());

// routes
app.use("/", require("./routes"));

// 404 handler
app.use(function(req, res, next) {
	res.status(404);
	res.render("notFound");
});

// 500 handler
app.use(function(error, req, res, next) {
	console.error(error.stack);
	res.status(500);
	res.render("error");
});

// start server
app.listen(app.get("port"), function() {
	console.log("Server running on http://localhost:" + app.get("port") + "/; to stop press ctrl-c");
});