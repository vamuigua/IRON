/****NAVIGATION BAR CLICK FUNCTION(on Mobile)***************/
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("meshow").classList.toggle("showing");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event){
    if (!event.target.matches(".handle")){
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0;i < dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('showing')){
                openDropdown.classList.remove('showing');
            }
        }
    }
}

/*****BACK TO TOP FUNCTION*********/
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});


/******Nav Scroll-on-click******/
$(document).ready(function () {
    $(window).scroll(function () {
        $('.hideme').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).animate({
                    'opacity': '1'
                }, 600);
            }

        });

    });

});