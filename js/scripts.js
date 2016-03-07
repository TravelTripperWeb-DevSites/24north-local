// JavaScript Document
/*$(document).ready(function() {
var maxHeight = 0;

$(".campaign-item").each(function(){
   if ($(this).height() > maxHeight) { 
   		maxHeight = $(this).height(); 
	}
});

$(".campaign-item").height(maxHeight);
});*/

  $(document).ready(function() {
     
      $("#carousel-bottom").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 500,
          paginationSpeed : 400,
          singleItem:true,
		  paginationNumbers: false,
		  autoPlay: false,
		  pagination: false,
		  navigation: true,
		  navigationText : false
		  
		 
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });
	
	 $(document).ready(function() {
     
      $("#home-carousel-2, #room-carousel-1").owlCarousel({
     
          navigation : false, // Show next and prev buttons
          slideSpeed : 500,
          paginationSpeed : 400,
          items : 2,
		  paginationNumbers: false,
		  pagination: false,
		  autoPlay: false,
		  navigation: true,
		  navigationText : false,
		  
		  itemsDesktop : [1199,2],
    itemsDesktopSmall : [980,2],
    itemsTablet: [768,2],
    itemsTabletSmall: false,
    itemsMobile : [767,1],
     
          // "singleItem:true" is a shortcut for:
          // items : 1, 
          // itemsDesktop : false,
          // itemsDesktopSmall : false,
          // itemsTablet: false,
          // itemsMobile : false
     
      });
     
    });

$(window).on('load scroll resize', function () {
 
 	var mheight = $(window).height();
	var mscroll = $(window).scrollTop();
	var mwidth = $(window).width();
	
	if(mwidth > 1240){
	if(mscroll > 100){
		$(".header-wrapper").addClass("fixed-header-wrapper");
		$("body").addClass("body-padd-sticky");
	}
	
	else{
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		$("body").removeClass("body-padd-sticky");
	}
	}
	
	
	if(mwidth < 1240){
		$(".header-wrapper").addClass("fixed-header-device");
		$("body").addClass("body-padd-sticky");
		$(".header-wrapper").removeClass("fixed-header-wrapper");
		
	}
	else{
		$(".header-wrapper").removeClass("fixed-header-device");
	}
 
 });
 
 $(document).ready(function() {
	 $(".home-banner-wrap .item").hover(function(){
		 $(this).find(".transparent-bg").toggle();
	 });
 });
 
 $(document).ready(function() {
	 $(".menu-btn").click(function(){
		 $(".main-menu").slideToggle(300);
	 });
	 $('#lightgallery').lightGallery({
   		selector: '.item'
		})
 });
 
$('#homeCarousel,#specialsCarousel').carousel({
  interval: 7000,
  cycle: true
}); 



