$(function() {  
    // Parallax
    $('.aboutme-area').parallax({
        imageSrc: 'img/bg1.jpg',
        speed: 0.2
    });

    $('.education-area').parallax({
        imageSrc: 'img/uci1.png',
        speed: 0.2
    });

    $('.projects-area').parallax({
        imageSrc: 'img/bg3.jpg',
        speed: 0.2
    });

    $('.experience-area').parallax({
        imageSrc: 'img/bg4.jpg',
        speed: 0.2
    });

    $('.hobbies-area').parallax({
        imageSrc: 'img/bg5.jpg',
        speed: 0.2
    });

    $('.contact-area').parallax({
        imageSrc: 'img/bg2.jpg',
        speed: 0.2
    });

    /* Taken from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll */
    // Enables smooth scrolling
    $("#myNavbar a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });
});