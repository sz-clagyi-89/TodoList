//on("event", "elementListenedInTheFuture", func(){...});
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

// deleting todos - to exclude multiplication on parents 
// use event.stopPropagation() method
$("ul").on("click", "span", function(event) {
	// *** NEW *** PARENT() - TO GET THE PARENT ELEMENT
	$(this).parent().fadeOut("1000", function() {
		$(this).remove();
	});
	event.stopPropagation();
});

// input keypress listener
$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		var todoText = $(this).val();
		console.log(todoText);
		$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
		$(this).val("");
	}
});

$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle(200, function() {
		if ($(this).val() !== "") {
			var textToAdd = $(this).val()
			$("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + textToAdd + "</li>");
			$(this).val("");
		}
	});
});

/*
$(".fa-plus-circle").click(function() {
	$("input[type='text']").fadeToggle()
});
*/










/*
$("ul").click(function() {
	alert("You clicked on a ul!");
});
$("body").click(function() {
	alert("You clicked on the body!");
});
*/


/*
//Check off todos by clicking
$("li").click(function() {
	// if gray
	if ($(this).css("color") === "rgb(128, 128, 128)") {
		$(this).css({
		color: "black",
		textDecoration: "none"
		});
	}
	// if black
	else {
		$(this).css({
		color: "gray",
		textDecoration: "line-through"
		});
	}
});
*/