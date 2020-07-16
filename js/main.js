;(function () {
	
	'use strict';

	// Carousel Feature Slide
	var owlCrouselFeatureSlide = function() {
				if(!$('#home').hasClass('animated') ) {
					setTimeout(function(){
						$('#home .to-animate').addClass('animated fadeInUp');
					}, 700);
					setTimeout(function(){
						$('#home .to-animate-2').addClass('animated fadeInUp');
					}, 900);
					
					$('#home').addClass('animated');
				}
	};

	var homeButtonAnimation = function() {
		$('[class*="btn"').click(function(event){
			var href = $(this).attr('href');
			$('html, body').animate({
				scrollTop: $(href).offset().top
			}, 500, 'swing');
			
			event.preventDefault();
		});
	};

	// animate-box
	var contentWayPoint = function() {

		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this).hasClass('animated') ) {
			
				$(this.element).addClass('fadeInUp animated');
			
			}

		} , { offset: '75%' } );

	};


	// Burger Menu
	var burgerMenu = function() {

		$('body').on('click', '.js-nbfc-nav-toggle', function(event){

			if ( $('#navbar').is(':visible') ) {
				$(this).removeClass('active');	
			} else {
				$(this).addClass('active');	
			}

			event.preventDefault();
			
		});

	};
    
	var navbar = function() {
		var header = $('#header');

		if ( header.hasClass('nbfc-animated') ) {
			$('.navbar-nav').onePageNav({
				currentClass: 'active',
				changeHash: true,
				scrollSpeed: 500,
				easing: 'swing',
			});
		}
	};

	// Page Nav
	var clickMenu = function() {
		
		var header = $('#header');

		if ( header.hasClass('nbfc-animated') ) {
			$('a[class="nav-link"]').click(function(event){
				var section = $(this).data('nav-section'),
					navbar = $('#navbar');
				$('html, body').animate({
					scrollTop: $('[data-section="' + section + '"]').offset().top
				}, 500);

				event.preventDefault();
				return false;
			});
		}

	};

	// Reflect scrolling in navigation
	var navActive = function(section) {

		var $el = $('#navbar > ul');
		$el.find('li').removeClass('active');
		$el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});

	};
	var navigationSection = function() {
		
		var header = $('#header');

		if ( header.hasClass('nbfc-animated') ) {
			var $section = $('section');
			
			$section.waypoint(function(direction) {
				if (direction === 'down') {
					navActive($(this.element).data('section'));
				
				}
			}, {
				offset: '150px'
			});

			$section.waypoint(function(direction) {
				if (direction === 'up') {
					navActive($(this.element).data('section'));
				}
			}, {
				offset: function() { return -$(this.element).height() + 155; }
			});
		}

	};


	// Window Scroll
	var windowScroll = function() {
		var header = $('#header');

		if ( header.hasClass('nbfc-animated') ) {
			var lastScrollTop = 0;
			var scrlMin = 200;
			var scrlTop = $(document).scrollTop();

			if (scrlTop > scrlMin) {
				header.addClass('navbar-fixed-top slideInDown');
				header.find('.navbar-brand').css({opacity:1});
			}

			$(window).scroll({scrlMin: scrlMin}, function(event){

				var header = $('#header'),
					scrlTop = $(this).scrollTop();

				var scrlMin = event.data.scrlMin;
				if (scrlTop > scrlMin) {
					header.addClass('navbar-fixed-top slideInDown');
					header.find('.navbar-brand').css({opacity:1});
				} else if ( scrlTop <= scrlMin && 
							header.hasClass('navbar-fixed-top')) {
					header.addClass('slideOutUp');
					setTimeout(function() {
						header.removeClass('navbar-fixed-top \
										   slideInDown slideOutUp');
						header.find('.navbar-brand').css({opacity:0});
					}, 100 );
				}
			});
		} else {
			header.find('.navbar-brand').css({opacity:1});
		}
	};



	// Animations

	// Open Source
	var openSourceAnimate = function() {

		if ( $('#open-source').length > 0 ) {	
			$('#open-source .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var openSourceWayPoint = function() {

		if ( $('#open-source').length > 0 ) {
			$('#open-source').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.animate-opensource-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-opensource-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(openSourceAnimate, 500);
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};

	// Use Cases
	var useCasesAnimate = function() {

		if ( $('#use-cases').length > 0 ) {	
			$('#use-cases .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var useCasesWayPoint = function() {

		if ( $('#use-cases').length > 0 ) {
			$('#use-cases').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					setTimeout(function(){
						$('.animate-usecases-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-usecases-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(useCasesAnimate, 500);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};

	// Services
	var servicesAnimate = function() {

		if ( $('#services').length > 0 ) {	
			$('#services .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var servicesWayPoint = function() {

		if ( $('#services').length > 0 ) {
			$('#services').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(servicesAnimate, 200);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};


	// Features
	var featuresAnimate = function() {

		if ( $('#features').length > 0 ) {	
			$('#features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var featuresWayPoint = function() {

		if ( $('#features').length > 0 ) {
			$('#features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {


					setTimeout(function(){
						$('.animate-features-1').addClass('animated fadeIn');
					}, 100);
					setTimeout(function(){
						$('.animate-features-2').addClass('animated fadeIn');
					}, 200);
					setTimeout(featuresAnimate, 500);
					setTimeout(function(){
						$('.animate-features-3').addClass('animated fadeInUp');
					}, 1400);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '95%' } );
		}

	};


	// testimonials
	var testimonialsAnimate = function() {

		if ( $('#testimonials').length > 0 ) {	
			$('#testimonials .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var testimonialsWayPoint = function() {

		if ( $('#testimonials').length > 0 ) {
			$('#testimonials').waypoint( function( direction ) {
										
				
					setTimeout(testimonialsAnimate, 200);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};

	// Pricing
	var contactAnimate = function() {

		if ( $('#contact').length > 0 ) {	
			$('#contact .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var contactWayPoint = function() {

		if ( $('#contact').length > 0 ) {
			$('#contact').waypoint( function( direction ) {
										
					setTimeout(function(){
						$('.animate-contact-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-contact-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(contactAnimate, 700);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};

	// Pricing
	var pressAnimate = function() {

		if ( $('#press').length > 0 ) {	
			$('#press .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}

	};
	var pressWayPoint = function() {

		if ( $('#press').length > 0 ) {
			$('#press').waypoint( function( direction ) {
										
					setTimeout(function(){
						$('.animate-press-1').addClass('animated fadeIn');
					}, 200);
					setTimeout(function(){
						$('.animate-press-2').addClass('animated fadeIn');
					}, 300);
					setTimeout(pressAnimate, 700);
					
					
					$(this.element).addClass('animated');
						
			
			} , { offset: '95%' } );
		}

	};

	var contactForm = function() {
		$("#contact-form").validate({
			rules: {
				name: {
					required: true,
					minlength: 2
				},
				message: {
					required: true,
					minlength: 2
				},
				email: {
					required: true,
					email: true
				}
			},
			messages: {
				name: {
					required: "Please enter Your Name",
					minlength: "Your name must consist of at least 2 characters"
				},
				message: {
					required: "Please Write Something",
					minlength: "Your message must consist of at least 2 characters"
				},
				email: "Please enter a valid email address"
			},
			submitHandler: function(form) {
				$(form).ajaxSubmit({
					type:"POST",
					data: $(form).serialize(),
					url:"mail.php",
					success: function() {
						$('#contact-form :input').attr('disabled', 'disabled');
						$('#contact-form').fadeTo( "slow", 0.15, function() {
							$(this).find(':input').attr('disabled', 'disabled');
							$(this).find('label').css('cursor','default');
							$('#success').fadeIn();
						});
					},
					error: function() {
						$('#contact-form').fadeTo( "slow", 0.15, function() {
							$('#error').fadeIn();
						});
					}
				});
			}
		});
	};


	var togglerAutoCollapse = function() {
		$('.navbar-nav>li>a').on('click', function(){
				$('.navbar-collapse').collapse('hide');
				$('.navbar-collapse').attr("aria-expanded","false");
				$('[data-target]').removeClass("active");
		});
	}
	

	var goToTop = function() {
		$('.js-gotop').on('click', function(event){							
			event.preventDefault();
			$('html, body').animate({
				scrollTop: $('html').offset().top
			}, 500);						
			return false;
		});
				
	};

	// Document on load.
	$(function(){

		burgerMenu();
		owlCrouselFeatureSlide();
		//clickMenu();
		windowScroll();
		//navigationSection();
		navbar();
		homeButtonAnimation();

		openSourceWayPoint();
		useCasesWayPoint();
		servicesWayPoint();
		featuresWayPoint();
		testimonialsWayPoint();
		contactWayPoint();
		pressWayPoint();
		contactForm();
		togglerAutoCollapse();
		goToTop();

	});


}());
