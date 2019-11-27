$(function(){
	$('.dj a').eq(0).addClass('active').siblings().removeClass('active');
	$('.qh').eq(0).show().siblings('.qh').hide();
	$('.dj a').click(function(){
		var self = $(this);
		var mo = self.parent().find('a');
		$(this).addClass('active').siblings().removeClass('active');
		$('.qh').eq(mo.index(self)).show().siblings('.qh').hide();
	});
	var copyright_date = new Date();
    //获取当前年
    var copyright_year=copyright_date.getFullYear();
    $(".year").html(copyright_year);
}); 

