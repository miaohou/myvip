$(function(){
	var $height = $(window).height(),
		$width = $(window).width();	
	
	// menu click event	
	$('ul.menu li a').click(function(){
		var $hash = $($(this).attr('href')).offset().top,
			dest = 0;
		if ($hash > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} else {
			dest = $hash;
		}
		$('html,body').animate({
			scrollTop: dest
		}, 1500, 'swing');
		
		return false;
	})
	
	// change app image event
	var images = [];
	images[1] = "images/app1.gif";
	images[2] = "images/app2.jpg";
	images[3] = "images/app3.jpg";
	var i = 1;
	setInterval(fadeDivs, 5000);
	
	function fadeDivs() {
		i = i < images.length-1 ? i : 0;
		$('#phone_img').fadeOut(700, function(){
			$(this).attr('src', images[i]).fadeIn(700);
		})
		i++;
	}	
	
	//hide phone
	if($width >= 768){
		// make section height 100%
		$('.area').css({height:$height+'px'});
		//scroll to fix phone
		$(window).scroll(function(){
			if($(window).scrollTop() > $height*2){
					$('#phone').css({position:'absolute'});
				}else{
					$('#phone').css({position:'fixed'});
				}
		})
	}
})