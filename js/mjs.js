 
$(function () {
 	
    $(".kebiao").hide();
    $(".kebiao").eq(0).show();
	$(".dishi li").click(function(){
    $(".dishi li").removeClass("active");
    $(this).addClass("active");
    $(".kebiao").hide();
    $(".kebiao").eq($(this).index()).slideDown(300).show();
  });
	
 });

$(document).ready(function() {

			$("#demo3").als({
				visible_items: 2,
				scrolling_items: 2,
				orientation: "vertical",
				circular: "yes",
				autoscroll: "yes",
				interval: 2000
			});

		});