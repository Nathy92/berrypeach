/**======================================
                SERVICES
*========================================*/

/*This function load a function after the page has loaded*/
$(function(){

    new WOW().init();
});

/**======================================
                WORK
*========================================*/
$(function(){
    $("#work").magnificPopup({
        delegate: 'a',//child item selector
        type:'image',
        gallery:{
            enabled:true
        }
    });
});


/*====================================================
                        TEAM
====================================================*/
$(function () {

    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true, 
        autoplayHoverPause: true,
		responsive: {
		  0: {
			items: 1
		  },
		  480: {
			items: 2
		  },
		  768: {
			items: 3
		  }
		}
    });
});


/*====================================================
                        TESTIMONIALS
====================================================*/

$(function () {

    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true, 
        autoplayHoverPause: true
		
    });
});


