$(function() {  
    /* Enables parallax by creating a div with the .parallax-mirror class */
    $('#intro').parallax({
        imageSrc: 'img/parallax1.jpg',
        speed: 0.2
    });
    $('#aboutme').parallax({
        imageSrc: 'img/parallax2.jpg',
        speed: 0.2
    });
    $('#skills').parallax({
        imageSrc: 'img/parallax3.png',
        speed: 0.2
    });
    $('#education').parallax({
        imageSrc: 'img/parallax4.jpg',
        speed: 0.2
    });
    $('#projects').parallax({
        imageSrc: 'img/parallax5.jpg',
        speed: 0.2
    });
    $('#experience').parallax({
        imageSrc: 'img/parallax6.jpg',
        speed: 0.2
    });
    $('#hobbies').parallax({
        imageSrc: 'img/parallax7.jpg',
        speed: 0.2
    });

    /* Updates the URL with appropriate hash code on scrollspy event */
    $(window).on('activate.bs.scrollspy', function (e) {
        history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
    });

    /* Taken from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll */
    /* Enables smooth scrolling */
    $("#myNavbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          $navbarHeight = $('.navbar').height()
          $('html, body').animate({
            scrollTop: $(hash).offset().top - $navbarHeight,
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
    });

    /* Adding image cross-fades on Hobbies Section, bjj subsection */
    setInterval("cycleImages('#bjj-cycler')", 6000);

    /* Adding image cross-fades on Hobbies Section, music subsection */
    setInterval("cycleImages('#music-cycler')", 6000);

    /* Adding image cross-fades on Hobbies Section, video game subsection */
    setInterval("cycleImages('#vg-cycler')", 6000);
});

function cycleImages( cycler ) {
    var $active = $(cycler + ' .active');
    var $next = ($active.next().length > 0) ? $active.next() : $(cycler + ' img:first');
    $next.css('z-index', 2); //move the next div up the pile
    $active.fadeOut(1500, function(){//fade out the top div
        $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the div
        $next.css('z-index', 3).addClass('active');//make the next div the top one
    });
}