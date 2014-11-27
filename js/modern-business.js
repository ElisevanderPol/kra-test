// Activates the Carousel
$('.carousel').carousel({
  interval: 5000
});

// Activates Tooltips for Social Links
$('.tooltip-social').tooltip({
  selector: "a[data-toggle=tooltip]"
});

$(document).ready(function(){	

	/*HARDCODED dialog functions*/
	$('#membership-dialog').dialog({
		autoOpen: false,
		height: 500,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-membership').click(function(){
		$('#membership-dialog').dialog("open");
	});

	$('#real-estate-dialog').dialog({
		autoOpen: false,
		height: 200,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-real-estate').click(function(){
		$('#real-estate-dialog').dialog("open");
	});

	$('#investors-dialog').dialog({
		autoOpen: false,
		height: 200,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-investors').click(function(){
		$('#investors-dialog').dialog("open");
	});

	$('#banks-dialog').dialog({
		autoOpen: false,
		height: 200,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-banks').click(function(){
		$('#banks-dialog').dialog("open");
	});

	$('#consultancy-dialog').dialog({
		autoOpen: false,
		height: 550,
		width: 500,
		dialogClass: 'readmore-dialog'
	});	

	$('#open-consultancy').click(function(){
		$('#consultancy-dialog').dialog("open");
	});
})
