// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
});

$(document).ready(function(){	

	$('.open-reader').click(function(){
		id = $(this).attr("id").split('-')[1];
		$('#'+id).toggle();
		message = $(this).text().trim();
		console.log($('#'+id).attr("class"));
		console.log($('#'+id).hasClass("toggle-map"));
		if($('#'+id).hasClass("toggle-map")) {
			if(message == "Show on map") {
				$(this).text("Hide map");
			}
			else {
				$(this).text("Show on map");
			}
		}
		else {
			if(message == "Read more") {
				$(this).text("Read less");
			}
			else {
				$(this).text("Read more");
			}
		}
	});

})
