jQuery(document).ready(function($){
	//Slick Slider
	$('#client-carousel').slick({
		  dots: true,
		  infinite: true,
		  autoplay: true,
		  autoplaySpeed: 3000,
		  speed: 300,
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button"><i class="fas fa-chevron-left"></i></button>',
  		nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button"><i class="fas fa-chevron-right"></i></button>',
		});
// Filterable portfolio
	$('#portfolio-list').filterable({
		useHash: true,
		animationSpeed: 1000,
		show: { width: 'show', opacity: 'show' },
		hide: { width: 'hide', opacity: 'hide' },
		useTags: true,
		tagSelector: '#filter-link a',
		selectedTagClass: 'current',
		allTag: 'all'
		});
// Filterable portfolio link active
	$('.btn_1 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('#portfolio .portfolio-section .portfolio-filter-btn ul .btn_1').addClass('btn_active');
	});
	$('.btn_2 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_2').addClass('btn_active');
	});
	$('.btn_3 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_3').addClass('btn_active');
	});
	$('.btn_4 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_4').addClass('btn_active');
	});
	$('.btn_5 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_5').addClass('btn_active');
	});
	$('.btn_6 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_6').addClass('btn_active');
	});
	$('.btn_7 a').click(function(e){
		e.preventDefault();
		$('.flt_btn').removeClass('btn_active');
		$('.btn_7').addClass('btn_active');
	});

//Counter up
	 $('.counter').counterUp({
	        delay: 10,
	        time: 1000
	    });
// Mobile menu responsive
	$('.mobile-icon').click(function(){
		$('.mobile-menu').css('display', 'block');
		$('.mobile-icon').css('display', 'none');
		$('header nav').css('background', 'transparent');
	});
	$('.mobile-menu i').click(function(){
		$('.mobile-menu').css('display', 'none');
		$('.mobile-icon').css('display', 'block');
		$('header nav').css('background', 'rgba(21, 38, 62, .5)');
	});
	$('.mobile-menu ul li a').click(function(){
		$('.mobile-menu').css('display', 'none');
		$('.mobile-icon').css('display', 'block');
		$('header nav').css('background', 'rgba(21, 38, 62, .5)');
	});

//Active menu
	  	const sections = document.querySelectorAll("section");
		const navLi = document.querySelectorAll("nav .container ul li");
		window.onscroll = () => {
		  var current = "";

		  sections.forEach((section) => {
		    const sectionTop = section.offsetTop;
		    if (pageYOffset >= sectionTop - 60) {
		      current = section.getAttribute("id"); }
		  });

		  navLi.forEach((li) => {
		    li.classList.remove("active");
		    if (li.classList.contains(current)) {
		      li.classList.add("active");
		    }
		  });
		};

});
