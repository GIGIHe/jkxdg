// JavaScript Document

$(function(){
	//yzm
	$('#getyzm').click(function(){
		var Myphone=$('#tel').val();
		if(Myphone==''){   //��֤�ֻ����Ƿ�Ϊ��
			alert('����д�ֻ���');
			return false;
			}
		var reg=/^0?1[3456789]\d{9}$/; //�ֻ�������
		if(!reg.test(Myphone)){   //��֤�ֻ����Ƿ���ȷ
			alert('����д��ȷ���ֻ��ţ�');
			return false;
			}
		$('#getyzm').hide();
		$('#daojishi').show();
		$.getJSON("http://sd.offcn.com/index.php?m=formguide&c=index&a=yzm&formid=340&mobile="+Myphone+"&callback=?",function(json){
			if(json.status==1){
				alert('���ڷ�����֤��');
			//����ʱ
				runcount(120);
			}else if(json.status==2){
				alert('���ֻ����ѽ��չ���֤�� �벻Ҫ�����ύ��');
				$('#getyzm').show(0);
				$('#daojishi').hide(0);
				return false;
			}
				
			})
		});
		
})
//����ʱ����
function runcount(t){
	
 if(t>0){
	 document.getElementById('daojishi').innerHTML=t+'S�����»�ȡ';
	 t--;
	 setTimeout(function(){
		 runcount(t)
		 },1000)
	 }else{
		 $('#getyzm').show();
		 $('#daojishi').hide();
		 }
 }
//����
$(function(){
//΢��΢��
	$(".wei").mouseover(function(){
		$(this).find("a").addClass("on").siblings().find("a").removeClass("on");
		$(this).find(".weixin").show().siblings().find(".weixin").hide();
	})
	$(".wei").mouseleave(function(){
		$(".wei a").removeClass("on");
		$(".weixin").hide();
	})
})