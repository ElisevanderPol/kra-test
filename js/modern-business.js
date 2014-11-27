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
		if(message == "Read more") {
			$(this).text("Read less");
		}
		else {
			$(this).text("Read more");
		}
	});

})
