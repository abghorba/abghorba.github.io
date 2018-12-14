$(function() {  
    /* Enables parallax */
    $('#intro').parallax({
        imageSrc: 'img/math1.jpg',
        speed: 0.2
    });
    $('#aboutme').parallax({
        imageSrc: 'img/intro.jpg',
        speed: 0.2
    });
    $('#skills').parallax({
        imageSrc: 'img/skills.png',
        speed: 0.2
    });
    $('#education').parallax({
        imageSrc: 'img/uci.jpg',
        speed: 0.2
    });
    $('#projects').parallax({
        imageSrc: 'img/projects.jpg',
        speed: 0.2
    });
    $('#experience').parallax({
        imageSrc: 'img/bg4.jpg',
        speed: 0.2
    });
    $('#hobbies').parallax({
        imageSrc: 'img/bjj.jpg',
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
});