var search = {
	getAllHotels: function(req, res) {
		// interfaz con la base de datos
		res.render("home", hMocks);
	}
};

var hMocks = [{
	name: "Hotel 1",
	price: 35000,
	range: {
		start: "18:00:00",
		end: "06:00:00"
	},
	stars: 3,
	images: [ "01-01.png", "01-02.png" ]
}, {
	name: "Hotel 2",
	price: 38000,
	range: {
		start: "20:00:00",
		end: "04:00:00"
	},
	stars: 4,
	images: [ "02-01.png", "02-02.png" ]
}];

module.exports = search;