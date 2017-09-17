jQuery(document).ready(function(){

	// Lift card and show stats on Mouseover
	jQuery('#product-card').hover(function(){
			jQuery(this).addClass('animate');
			jQuery('div.carouselNext, div.carouselPrev').addClass('visible');
		 }, function(){
			jQuery(this).removeClass('animate');
			jQuery('div.carouselNext, div.carouselPrev').removeClass('visible');
	});

	// Flip card to the back side
	jQuery('#view_details').click(function(){
		alert("===================");
		jQuery('div.carouselNext, div.carouselPrev').removeClass('visible');
		jQuery('#product-card').addClass('flip-10');
		setTimeout(function(){
			jQuery('#product-card').removeClass('flip-10').addClass('flip90').find('div.shadow').show().fadeTo( 80 , 1, function(){
				jQuery('#product-front, #product-front div.shadow').hide();
			});
		}, 50);

		setTimeout(function(){
			jQuery('#product-card').removeClass('flip90').addClass('flip190');
			jQuery('#product-back').show().find('div.shadow').show().fadeTo( 90 , 0);
			setTimeout(function(){
				jQuery('#product-card').removeClass('flip190').addClass('flip180').find('div.shadow').hide();
				setTimeout(function(){
					jQuery('#product-card').css('transition', '100ms ease-out');
					jQuery('#cx, #cy').addClass('s1');
					setTimeout(function(){jQuery('#cx, #cy').addClass('s2');}, 100);
					setTimeout(function(){jQuery('#cx, #cy').addClass('s3');}, 200);
					jQuery('div.carouselNext, div.carouselPrev').addClass('visible');
				}, 100);
			}, 100);
		}, 150);
	});

	// Flip card back to the front side
	jQuery('#flip-back').click(function(){

		jQuery('#product-card').removeClass('flip180').addClass('flip190');
		setTimeout(function(){
			jQuery('#product-card').removeClass('flip190').addClass('flip90');

			jQuery('#product-back div.shadow').css('opacity', 0).fadeTo( 100 , 1, function(){
				jQuery('#product-back, #product-back div.shadow').hide();
				jQuery('#product-front, #product-front div.shadow').show();
			});
		}, 50);

		setTimeout(function(){
			jQuery('#product-card').removeClass('flip90').addClass('flip-10');
			jQuery('#product-front div.shadow').show().fadeTo( 100 , 0);
			setTimeout(function(){
				jQuery('#product-front div.shadow').hide();
				jQuery('#product-card').removeClass('flip-10').css('transition', '100ms ease-out');
				jQuery('#cx, #cy').removeClass('s1 s2 s3');
			}, 100);
		}, 150);

	});


	/* ----  Image Gallery Carousel   ---- */

	var carousel = jQuery('#carousel ul');
	var carouselSlideWidth = 335;
	var carouselWidth = 0;
	var isAnimating = false;

	// building the width of the casousel
	jQuery('#carousel li').each(function(){
		carouselWidth += carouselSlideWidth;
	});
	jQuery(carousel).css('width', carouselWidth);

	// Load Next Image
	jQuery('div.carouselNext').on('click', function(){
		var currentLeft = Math.abs(parseInt(jQuery(carousel).css("left")));
		var newLeft = currentLeft + carouselSlideWidth;
		if(newLeft == carouselWidth || isAnimating === true){return;}
		jQuery('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
		isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);
	});

	// Load Previous Image
	jQuery('div.carouselPrev').on('click', function(){
		var currentLeft = Math.abs(parseInt(jQuery(carousel).css("left")));
		var newLeft = currentLeft - carouselSlideWidth;
		if(newLeft < 0  || isAnimating === true){return;}
		jQuery('#carousel ul').css({'left': "-" + newLeft + "px",
							   "transition": "300ms ease-out"
							 });
	    isAnimating = true;
		setTimeout(function(){isAnimating = false;}, 300);			
	});
});