$(".step").click( function() {
	$(this).addClass("active").prevAll().addClass("active");
	$(this).nextAll().removeClass("active");
});

$(".step01").click( function() {
	$("#line-progress").css("width", "0%");
	$(".bac").addClass("active").siblings().removeClass("active");
});

$(".step02").click( function() {
	$("#line-progress").css("width", "14.5%");
	$(".deug").addClass("active").siblings().removeClass("active");
});

$(".step03").click( function() {
	$("#line-progress").css("width", "28.5%");
	$(".licence").addClass("active").siblings().removeClass("active");
});

$(".step04").click( function() {
	$("#line-progress").css("width", "42.5%");
	$(".sip").addClass("active").siblings().removeClass("active");
});

$(".step05").click( function() {
	$("#line-progress").css("width", "57%");
	$(".si1").addClass("active").siblings().removeClass("active");
});
$(".step06").click( function() {
	$("#line-progress").css("width", "71%");
	$(".si2").addClass("active").siblings().removeClass("active");
});
$(".step07").click( function() {
	$("#line-progress").css("width", "85%");
	$(".pfe").addClass("active").siblings().removeClass("active");
});
$(".step08").click( function() {
	$("#line-progress").css("width", "100%");
	$(".ing").addClass("active").siblings().removeClass("active");
});