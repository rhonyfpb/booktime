$(function() {
	//

	// load initial data
	var locale = $("#locale"); // cuadro de busqueda
	var hStart = $("#hStart"); // hora de llegada
	var hEnd = $("#hEnd"); // hora de salida
	var search = $("#search"); // boton de busqueda

	// handlers
	locale.length && $.ajax({
		url: "/getLocales",
		method: "GET",
	}).done(function(data) {
		locale.autocomplete({
			minLength: 2,
			source: data
		}).autocomplete("instance")._renderItem = function( ul, item ) {
			return $( "<li>" ).append("<a>" + item.label + "<br/ >" + item.value + "</a>").appendTo(ul);
		};
	});

	hStart.length && hStart.change(function() {
		var value = $(this).val();
		// se deshabilitan los valores previos
		hEnd.find("option").attr("disabled", false);
		hEnd.find("option[value='" + value + "']").attr("disabled", true).prevAll().attr("disabled", true);
	});

	hEnd.length && hEnd.change(function() {
		var value = $(this).val();
		// se deshabilitan los valores previos
		hStart.find("option").attr("disabled", false);
		hStart.find("option[value='" + value + "']").attr("disabled", true).nextAll().attr("disabled", true);
	});

	search.length && search.click(function() {
		//
	});

	//
});