(function($){
	$(document).ready(function(){


   function is_mobile() {
		var agents = ['android', 'webos', 'iphone', 'ipad', 'blackberry','Android', 'webos', ,'iPod', 'iPhone', 'iPad', 'Blackberry', 'BlackBerry'];
		var ismobile=false;
		for(i in agents) {
			if (navigator.userAgent.split(agents[i]).length>1)
			ismobile = true;
		}
		return ismobile;
	}

	jQuery('#testimonial').showbizpro({
		dragAndScroll:"off",
						visibleElementsArray:[1,1,1,1],
						carousel:"off",
						entrySizeOffset:0,
						allEntryAtOnce:"off",
						rewindFromEnd:"off",
						autoPlay:"on",
						delay:5000
		
	});
	

});

})(this.jQuery);


jQuery(document).ready(function($) {
var pxShow = 300;//height on which the button will show
		var fadeInTime = 400;//how slow/fast you want the button to show
		var fadeOutTime = 400;//how slow/fast you want the button to hide
		var scrollSpeed = 400;//how slow/fast you want the button to scroll to top. can be a value, 'slow', 'normal' or 'fast'

		jQuery(window).scroll(function(){
			if(jQuery(window).scrollTop() >= pxShow){
				jQuery("#backtotop").fadeIn(fadeInTime);
			}else{
				jQuery("#backtotop").fadeOut(fadeOutTime);
			}
		});
		 
		jQuery('#backtotop a').click(function(){
			jQuery('html, body').animate({scrollTop:0}, scrollSpeed); 
			return false; 
		}); 
})




jQuery(document).ready(function($) {


			// Create the dropdown bases
			$("<select />").appendTo("#navigation");
			
			// Create default option "Go to..."
			$("<option />", {
			   "selected": "selected",
			   "value"   : "",
			   "text"    : "Menu"
			}).appendTo("#navigation select");
			
				
			// Populate dropdowns with the first menu items
			$("#navigation li a").each(function() {
			 	var el = $(this);
			 	$("<option />", {
			     	"value"   : el.attr("href"),
			    	"text"    : el.text()
			 	}).appendTo("#navigation select");
			});
			
				
			//make responsive dropdown menu actually work			
	     	$("#navigation select").change(function() {
		       	window.location = $(this).find("option:selected").val();
		   	});
			
			
			
			


})();
