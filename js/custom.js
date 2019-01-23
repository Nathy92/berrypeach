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


/*====================================================
                        STATS
====================================================*/
$(function(){
    $('.counter').counterUp({
        delay:10,
        time:2000
    });
});


/*====================================================
                        NAVIGATION
====================================================*/
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() < 50 ){
            //Hide nav when scroll top is less than 50px
            $("nav").removeClass("vesco-top-nav");
        }else{
            //show nav if  > 50px
            $("nav").addClass("vesco-top-nav");
        }
    });
});