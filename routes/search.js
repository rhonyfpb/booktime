var TAFFY = require("taffy");

var search = {
	getHome: function(req, res) {
		// interfaz con la base de datos
		res.render("home", hMocks);
	},

	getAllLocales: function(req, res) {
		// interfaz con la base de datos
		res.json(hLocale);
	},

	getHotels: function(req, res) {
		console.log("req.body", req.body);
		var hotelMocks = TAFFY(hMocks);
		var result = hotelMocks({ locale: req.body.locale });
		//console.log("result", result.count());
		result.each(function(item) {
			console.log("item", item);
		});
		// interfaz
		res.render("search");
	}
};

var hMocks = [{
	name: "Hotel Bogotá 1",
	price: 35000,
	range: {
		start: "01",
		end: "13"
	},
	stars: 3,
	address: "Calle falsa # 123",
	locale: "Bogotá",
	images: [ "01-01.png", "01-02.png" ]
}, {
	name: "Hotel Chía 2",
	price: 38000,
	range: {
		start: "03",
		end: "11"
	},
	stars: 4,
	address: "Carrera 2 con 3",
	locale: "Chía",
	images: [ "02-01.png", "02-02.png" ]
}, {
	name: "Hotel Bogotá 3",
	price: 45000,
	range: {
		start: "02",
		end: "12"
	},
	stars: 5,
	address: "Carrera 11 con 2",
	locale: "Bogotá",
	images: [ "03-01.png", "03-02.png" ]
}, {
	name: "Hotel Medellín 4",
	price: 39000,
	range: {
		start: "01",
		end: "12"
	},
	stars: 4,
	address: "Calle 3 con 22",
	locale: "Medellín",
	images: [ "04-01.png", "04-02.png" ]
}];

var hLocale = [{
	label: "Cundinamarca, Bogotá",
	search: "cundinamarca bogota",
	value: "Bogotá"
}, {
	label: "Cundinamarca, Chía",
	search: "cundinamarca chia",
	value: "Chía"
}, {
	label: "Antioquia, Medellín",
	search: "antioquia medellin",
	value: "Medellín"
}];

module.exports = search;s