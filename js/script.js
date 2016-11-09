/*$(document).ready(function(){
	//
});*/
$(function(){
	// Set Options
	var slideFadeSpeed = 2000;
	var autoSlideIsOn = true;
	var autoSlideSpeed = 7000;
	
	// Add initial active class
	$('.slide').first().addClass('active');
	
	// Hide all slides
	$('.slide').hide();
	
	// Show first slide
	$('.active').show();
	
	// Next Slide handler
	$('#next').on('click', nextSlide);
	
	// Previous Slide handler
	$('#prev').on('click', previousSlide);
	
	// Auto-slide handler
	if(autoSlideIsOn === true){
		setInterval(nextSlide, autoSlideSpeed);
	}
	
	// Switch to next slide
	function nextSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':last-child')){
			$('.slide').first().addClass('active');
		} else {
			$('.oldActive').next().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(slideFadeSpeed);
		$('.active').fadeIn(slideFadeSpeed);
	}
	
	// Switch to previous slide
	function previousSlide(){
		$('.active').removeClass('active').addClass('oldActive');
		if($('.oldActive').is(':first-child')){
			$('.slide').last().addClass('active');
		} else {
			$('.oldActive').prev().addClass('active');
		}
		
		$('.oldActive').removeClass('oldActive');
		$('.slide').fadeOut(slideFadeSpeed);
		$('.active').fadeIn(slideFadeSpeed);
	}
});