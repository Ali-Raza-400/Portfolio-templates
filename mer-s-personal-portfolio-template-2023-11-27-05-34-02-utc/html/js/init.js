/*
 * Copyright (c) 2022 Marketify
 * Author: Marketify
 * This file is made for CURRENT TEMPLATE
*/

jQuery(document).ready(function(){

	"use strict";
	
	// here all ready functions
	
	mers_tm_modalbox();
	mers_tm_trigger_menu();
	mers_tm_service_popup();
	mers_tm_modalbox_news();
	mers_tm_modalbox_portfolio();
	progress_by_frenify();
	mers_tm_cursor();
	mers_tm_imgtosvg();
	mers_tm_popup();
	mers_tm_data_images();
	mers_tm_contact_form();
	mers_tm_owl_carousel();
	mers_tm_down();
	mers_tm_subscribtion();
	mers_tm_about_animation();
	mers_tm_scrollable();
	
	jQuery(window).load('body', function(){
		mers_tm_my_load();
	});
	
});

// -----------------------------------------------------
// ---------------   FUNCTIONS    ----------------------
// -----------------------------------------------------

// -----------------------------------------------------
// --------------------   MODALBOX    ------------------
// -----------------------------------------------------

function mers_tm_modalbox(){
	
	"use strict";
	
	jQuery('.mers_tm_all_wrap').prepend('<div class="mers_tm_modalbox"><div class="box_inner"><div class="close"><a href="#"><i class="icon-cancel"></i></a></div><div class="description_wrap"></div></div></div>');
}

// -----------------------------------------------------
// ---------------   TRIGGER MENU    -------------------
// -----------------------------------------------------

function mers_tm_trigger_menu(){
	
	"use strict";

	var hamburger 		= jQuery('.trigger .hamburger');
	var mobileMenu		= jQuery('.mers_tm_mobile_menu .dropdown');
	var mobileMenuList	= jQuery('.mers_tm_mobile_menu .dropdown .dropdown_inner ul li a');

	hamburger.on('click',function(){
		var element 	= jQuery(this);

		if(element.hasClass('is-active')){
			element.removeClass('is-active');
			mobileMenu.slideUp();
		}else{
			element.addClass('is-active');
			mobileMenu.slideDown();
		}
		return false;
	});
	
	mobileMenuList.on('click',function(){
		jQuery('.trigger .hamburger').removeClass('is-active');
		mobileMenu.slideUp();
		return false;
	});
}

// -------------------------------------------------
// -------------  SERVICE POPUP  -------------------
// -------------------------------------------------

function mers_tm_service_popup(){
	
	"use strict";
	
	var modalBox		= jQuery('.mers_tm_modalbox');
	var button			= jQuery('.mers_tm_service .service_list .mers_tm_full_link');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element = jQuery(this);
		var parent	= element.closest('.mers_tm_service .service_list ul li');
		var elImage	= parent.find('.popup_service_image').attr('src');
		var title	= parent.find('.title').text();
		var content = parent.find('.service_hidden_details').html();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.service_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+elImage+'"></div></div>');
		mers_tm_data_images();
		modalBox.find('.service_popup_informations .image').after('<div class="main_title"><h3>'+title+'</h3></div>');
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX NEWS  -------------------
// -------------------------------------------------

function mers_tm_modalbox_news(){
	
	"use strict";
	
	var modalBox		= jQuery('.mers_tm_modalbox');
	var button			= jQuery('.mers_tm_news .mers_tm_full_link,.mers_tm_news .news_list .title a');
	var closePopup		= modalBox.find('.close');
	
	button.on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content 	= parent.find('.news_hidden_details').html();
		var image		= element.closest('.list_inner').find('.image .main').data('img-url');
		var metabox		= parent.find('.metabox').html();
		var title	 	= parent.find('.details .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.news_popup_informations').prepend('<div class="image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.news_popup_informations .image').after('<div class="details"><div class="metabox">'+metabox+'</div><div class="title"><h3>'+title+'</h3></div><div>');
		mers_tm_data_images();
		mers_tm_imgtosvg();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  MODALBOX PORTFOLIO  --------------
// -------------------------------------------------

function mers_tm_modalbox_portfolio(){
	
	"use strict";
	
	var modalBox		= jQuery('.mers_tm_modalbox');
	var button			= jQuery('.mers_tm_portfolio .portfolio_popup');
	var closePopup		= modalBox.find('.close');
	
	button.off().on('click',function(){
		var element 	= jQuery(this);
		var parent 		= element.closest('.list_inner');
		var content	 	= parent.find('.hidden_content').html();
		var image		= parent.find('.image .main').data('img-url');
		var category 	= parent.find('.details .category a').text();
		var title	 	= parent.find('.details .title a').text();
		modalBox.addClass('opened');
		modalBox.find('.description_wrap').html(content);
		modalBox.find('.popup_details').prepend('<div class="top_image"><img src="img/thumbs/4-2.jpg" alt="" /><div class="main" data-img-url="'+image+'"></div></div>');
		modalBox.find('.popup_details .top_image').after('<div class="portfolio_main_title"><h3>'+title+'</h3><span><a href="#">'+category+'</a></span><div>');
		mers_tm_data_images();
		return false;
	});
	closePopup.on('click',function(){
		modalBox.removeClass('opened');
		modalBox.find('.description_wrap').html('');
		return false;
	});
}

// -------------------------------------------------
// -------------  PROGRESS BAR  --------------------
// -------------------------------------------------

function tdProgress(container){
	
	"use strict";
		
	container.find('.progress_inner').each(function() {
		var progress 		= jQuery(this);
		var pValue 			= parseInt(progress.data('value'), 10);
		var pColor			= progress.data('color');
		var pBarWrap 		= progress.find('.bar');
		var pBar 			= progress.find('.bar_in');
		var number 			= progress.find('.number');
		var label 			= progress.find('.label');
		number.css({right:(100 - pValue)+'%'});
		setTimeout(function(){label.addClass('opened');},500);
		pBar.css({width:pValue+'%', backgroundColor:pColor});
		setTimeout(function(){pBarWrap.addClass('open');});
	});
}
function progress_by_frenify(wrapper){
	
	"use strict";
	
	var element;
	if(wrapper){
		element = wrapper.find('.dodo_progress');
	}else{
		element = jQuery('.dodo_progress');
	}
	element.each(function() {
		var pWrap = jQuery(this);
		pWrap.find('.number').css({right:'100%'});
		pWrap.waypoint({handler: function(){tdProgress(pWrap);},offset:'90%'});	
	});
}

// -----------------------------------------------------
// -----------------    TILT    ------------------------
// -----------------------------------------------------

jQuery('.tilt-effect').tilt({
    maxTilt: 6,
	easing: "cubic-bezier(.03,.98,.52,.99)",
	speed: 500,
	transition: true
});

// -----------------------------------------------------
// ---------------   PRELOADER   -----------------------
// -----------------------------------------------------

function mers_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}

// -----------------------------------------------------
// -----------------   MY LOAD    ----------------------
// -----------------------------------------------------

function mers_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){mers_tm_preloader();},speed);
}

// -----------------------------------------------------
// ------------------   CURSOR    ----------------------
// -----------------------------------------------------

function mers_tm_cursor(){
	
    "use strict";
	
	var myCursor	= jQuery('.mouse-cursor');
	
	if(myCursor.length){
		if ($("body")) {
		const e = document.querySelector(".cursor-inner"),
		t = document.querySelector(".cursor-outer");
		let n, i = 0,
		o = !1;
		window.onmousemove = function (s) {
		o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX
		}, $("body").on("mouseenter", "a, .cursor-pointer", function () {
		e.classList.add("cursor-hover"), t.classList.add("cursor-hover")
		}), $("body").on("mouseleave", "a, .cursor-pointer", function () {
		$(this).is("a") && $(this).closest(".cursor-pointer").length || (e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover"))
		}), e.style.visibility = "visible", t.style.visibility = "visible"
    }
	}
};

// -----------------------------------------------------
// ---------------    IMAGE TO SVG    ------------------
// -----------------------------------------------------

function mers_tm_imgtosvg(){
	
	"use strict";
	
	jQuery('img.svg').each(function(){
		
		var jQueryimg 		= jQuery(this);
		var imgClass		= jQueryimg.attr('class');
		var imgURL			= jQueryimg.attr('src');

		jQuery.get(imgURL, function(data) {
			// Get the SVG tag, ignore the rest
			var jQuerysvg = jQuery(data).find('svg');

			// Add replaced image's classes to the new SVG
			if(typeof imgClass !== 'undefined') {
				jQuerysvg = jQuerysvg.attr('class', imgClass+' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			jQuerysvg = jQuerysvg.removeAttr('xmlns:a');

			// Replace image with new SVG
			jQueryimg.replaceWith(jQuerysvg);

		}, 'xml');

	});
}

// -----------------------------------------------------
// --------------------   POPUP    ---------------------
// -----------------------------------------------------

function mers_tm_popup(){
	
	"use strict";

	jQuery('.gallery_zoom').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			delegate: 'a.zoom', // the selector for gallery item
			type: 'image',
			gallery: {
			  enabled:true
			},
			removalDelay: 300,
			mainClass: 'mfp-fade'
		});

	});
	jQuery('.popup-youtube, .popup-vimeo').each(function() { // the containers for all your galleries
		jQuery(this).magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,
			fixedContentPos: true
		});
	});
	
	jQuery('.soundcloude_link').magnificPopup({
	  type : 'image',
	   gallery: {
		   enabled: true, 
	   },
	});
}

// -----------------------------------------------------
// ---------------   DATA IMAGES    --------------------
// -----------------------------------------------------

function mers_tm_data_images(){
	
	"use strict";
	
	var data			= jQuery('*[data-img-url]');
	
	data.each(function(){
		var element			= jQuery(this);
		var url				= element.data('img-url');
		element.css({backgroundImage: 'url('+url+')'});
	});
}

// -----------------------------------------------------
// ----------------    CONTACT FORM    -----------------
// -----------------------------------------------------

function mers_tm_contact_form(){
	
	"use strict";
	
	jQuery(".contact_form #send_message").on('click', function(){
		
		var name 		= jQuery(".contact_form #name").val();
		var email 		= jQuery(".contact_form #email").val();
		var message 	= jQuery(".contact_form #message").val();
		var subject 	= jQuery(".contact_form #subject").val();
		var success     = jQuery(".contact_form .returnmessage").data('success');
	
		jQuery(".contact_form .returnmessage").empty(); //To empty previous error/success message.
		//checking for blank fields	
		if(name===''||email===''||message===''){
			
			jQuery('.contact_form .empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		else{
			// Returns successful data submission message when the entered information is stored in database.
			jQuery.post("modal/contact.php",{ ajax_name: name, ajax_email: email, ajax_message:message, ajax_subject: subject}, function(data) {
				
				jQuery(".contact_form .returnmessage").append(data);//Append returned message to message paragraph
				
				
				if(jQuery(".contact_form .returnmessage span.contact_error").length){
					jQuery(".contact_form .returnmessage").slideDown(500).delay(2000).slideUp(500);		
				}else{
					jQuery(".contact_form .returnmessage").append("<span class='contact_success'>"+ success +"</span>");
					jQuery(".contact_form .returnmessage").slideDown(500).delay(4000).slideUp(500);
				}
				
				if(data===""){
					jQuery("#contact_form")[0].reset();//To reset form fields on success
				}
				
			});
		}
		return false; 
	});
}

// -----------------------------------------------------
// ----------------    OWL CAROUSEL    -----------------
// -----------------------------------------------------

function mers_tm_owl_carousel(){

	"use strict";
	
	var carousel			= jQuery('.mers_tm_testimonials .owl-carousel');
	
		carousel.each(function(){
			var element = jQuery(this);
			
			element.owlCarousel({
			loop: true,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			items: 1,
			lazyLoad: true,
			autoplay: true,
			autoplayTimeout: 6000,
			smartSpeed: 2000,
			margin: 0,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive : {
				0 : {
					mouseDrag: false,
					touchDrag: true,
				},
				1100 : {
					mouseDrag: true,
					touchDrag: true,
				}
			}
		});
		mers_tm_imgtosvg();
			
			element.parent().find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
			});
			// Go to the previous item
			element.parent().find('.prev_button').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				element.trigger('prev.owl.carousel');
				return false;
			});
			
		});
		
	
	var carousel2			= jQuery('.mers_tm_partners .owl-carousel');

	carousel2.owlCarousel({
		loop: true,
		items: 5,
		lazyLoad: false,
		margin: 50,
		autoplay: true,
		autoplayTimeout: 7000,
		dots: true,
		nav: false,
		navSpeed: true,
		responsive:{
			0:{items:2},
			480:{items:2},
			768:{items:3},
			1040:{items:4},
			1200:{items:5},
			1600:{items:5},
			1920:{items:5}
		}
	});
	mers_tm_imgtosvg();
	
	var carousel3			= jQuery('.mers_tm_news .owl-carousel');
	
	carousel3.each(function(){
		var element = jQuery(this);
			element.owlCarousel({
			loop: true,
			items: 3,
			lazyLoad: false,
			margin: 30,
			autoplay: true,
			autoplayTimeout: 6000,
			dots: true,
			nav: false,
			navSpeed: true,
			responsive:{
				0:{items:1},
				480:{items:1},
				768:{items:1},
				1040:{items:2},
				1200:{items:2},
				1600:{items:3},
				1920:{items:3}
			}
		});
		mers_tm_imgtosvg();
		mers_tm_modalbox_news();
		
		element.closest('.mers_tm_news').find('.next_button').click(function() {
			element.trigger('next.owl.carousel');
			return false;
			});
			// Go to the previous item
			element.closest('.mers_tm_news').find('.prev_button').click(function() {
				// With optional speed parameter
				// Parameters has to be in square bracket '[]'
				element.trigger('prev.owl.carousel');
				return false;
			});
	});
	
}

// -------------------------------------------------
// -----------------  GRID MASONRY  ----------------
// -------------------------------------------------

$('.grid').masonry({
	itemSelector: '.grid-item',
});

// ------------------------------------------------
// -------------------  ANCHOR --------------------
// ------------------------------------------------

jQuery('.anchor_nav').onePageNav();

// -----------------------------------------------------
// -----------------    DOWN    ------------------------
// -----------------------------------------------------

function mers_tm_down(){
	
	"use strict";
		
	jQuery('.anchor').on('click',function(){
		
		if($.attr(this, 'href') !== '#'){
			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top
			}, 800);
		}
		
		return false;
	});
}

// -----------------------------------------------------
// --------------------    WOW JS    -------------------
// -----------------------------------------------------

 new WOW().init();

// -----------------------------------------------------
// ------------    WAIT FOR IMAGES   -------------------
// -----------------------------------------------------

$('.portfolio_list').waitForImages().done(function() {
    // All descendant images have loaded, now slide up.
    $('.grid').masonry({
		itemSelector: '.grid-item',
	});
});

// -----------------------------------------------------
// ------------------    SUBSCRIBE   -------------------
// -----------------------------------------------------

function validateEmail(email){
	
	"use strict";
	
	var re = /\S+@\S+\.\S+/;return re.test(email);
}

function mers_tm_subscribtion(){
	
	"use strict";
	
	$(".mers_tm_subscribe a").on('click', function(){
		var parent		= $(this).closest('.mers_tm_subscribe');
		var email		= parent.find('input').val();
		var echoM		= parent.find(".returnmessage");
		var success     = echoM.data('success');
		var message     = echoM.data('message');
		echoM.empty(); //To empty previous error/success message.
		if(email === ''){
			parent.find('.empty_notice').slideDown(500).delay(2000).slideUp(500);
		}
		if(validateEmail(email)){
			$.post("modal/subscribe.php",{ ajax_email: email, ajax_message: message}, function(data) {
				echoM.append(data);//Append returned message to message paragraph
				echoM.append("<span class='contact_success'>" + success + "</span>");
				echoM.slideDown(500).delay(4000).slideUp(500);
				parent.find('input').val('');
			});
		}
		return false;
	});
}

// -----------------------------------------------------
// -------------    PARALLAX ANIMATION    --------------
// -----------------------------------------------------

function mers_tm_about_animation(){

	"use strict";
	
	var myParallax = jQuery('.parallax');
	
	myParallax.each(function(){
		var element = jQuery(this);
		var scene = element.get(0);
	  	var parallax = new Parallax(scene, { 
		relativeInput: true,
		onReady: function() { console.log('ready!');
	  } });
	});
}

// -------------------------------------------------
// --------------   MENU SCROLL  -------------------
// -------------------------------------------------

function mers_tm_scrollable(){
	
	"use strict";
	
	var ww				= jQuery(window).width();
	var H				= jQuery(window).height();
	var scrollable		= jQuery('.mers_tm_leftpart .scrollable');
	var verMenu			= jQuery('.mers_tm_leftpart .menu');
	var logoHeight		= jQuery('.mers_tm_leftpart .logo').outerHeight(true);
	var subsHeight		= jQuery('.mers_tm_leftpart .subscribe_wrap').outerHeight(true);
	var copyrightHeight	= jQuery('.mers_tm_leftpart .copyright').height();
	var extraHeight		= 95;
	if(ww>=1600){
		extraHeight		= 195;
	}
	console.log(copyrightHeight);
	verMenu.css({height:H-logoHeight-subsHeight-copyrightHeight-extraHeight});
	
	scrollable.each(function(){
		var element		= jQuery(this);
		
		element.css({height: H-logoHeight-subsHeight-copyrightHeight-extraHeight}).niceScroll({
			touchbehavior:false,
			cursorwidth:0,
			autohidemode:true,
			cursorborder:"0px solid #eee"
		});
	});
}

// -------------------------------------------------
// -------------  GLITCH  --------------------------
// -------------------------------------------------

$(".glitch").mgGlitch({
	destroy: false,
	glitch: true,
	scale: true,
	blend: true,
	blendModeType: "hue",
	glitch1TimeMin: 200,
	glitch1TimeMax: 400,
	glitch2TimeMin: 10,
	glitch2TimeMax: 100
});