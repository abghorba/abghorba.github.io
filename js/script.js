var navbarHeight = 50;

$(function() {  
    /* Enables parallax by creating a div with the .parallax-mirror class  */
    setParallaxImages();

    /* Sets the scroll-up arrow when page is scrolled more than 50px */
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {
            $('#return-to-top').fadeIn(200);
        } else {
            $('#return-to-top').fadeOut(200);
        }
    });
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });
    
    /* Updates the URL with appropriate hash code on scrollspy event */
    $(window).on('activate.bs.scrollspy', function(e) {
        history.replaceState({}, "", $("a[href^='#']", e.target).attr("href"));
        $(window).trigger('hashchange')
    });

    /* Enables smooth scrolling for scrolldown arrow in intro section */
    $("#intro a").on('click', function(e) {
        smoothScroll("#about");
    });

    /* Enables smooth scrolling for items in experience section */
    $(".description a").on('click', function(e) {
        let scrollTo = '#' + $(this).html();
        smoothScroll(scrollTo);
    });

    /* Taken from https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_eff_animate_smoothscroll */
    /* Enables smooth scrolling for navbar */
    $("#myNavbar a").on('click', function(e) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          let hash = this.hash;
    
          smoothScroll(hash);
        } // End if
    });

    /* Calls the functions on appropriate hashchange events */
    $(window).on('hashchange', function(e) {
        let hash = window.location.hash
        if (hash === "#skills") { revealSkillIcons(); }
        if (hash === "#experience") { revealTimeline(); }
    });

    /* Adding image cross-fades on Hobbies Section, bjj subsection */
    setInterval("cycleImages('#bjj-cycler')", 6000);

    /* Adding image cross-fades on Hobbies Section, music subsection */
    setInterval("cycleImages('#music-cycler')", 6000);

    /* Adding image cross-fades on Hobbies Section, video game subsection */
    setInterval("cycleImages('#vg-cycler')", 6000);
});


/* Smooth scrolling */
function smoothScroll(hash) {
    // Using jQuery's animate() method to add smooth page scroll
    $('html, body').animate({
    scrollTop: $(hash).offset().top - navbarHeight,
    }, 800);
}

/* Adds the parallax images */
function setParallaxImages() {
    $('#intro').parallax({
        imageSrc: 'img/parallax1.jpg'
    });
    $('#about').parallax({
        imageSrc: 'img/parallax2.jpg'
    });
    $('#experience').parallax({
        imageSrc: 'img/parallax3.jpg',
    });
    $('#skills').parallax({
        imageSrc: 'img/parallax4.png',
    });
    $('#projects').parallax({
        imageSrc: 'img/parallax5.jpg',
    });
    $('#hobbies').parallax({
        imageSrc: 'img/parallax6.jpg',
    });
}

/* Adds crossfading on images */
function cycleImages( cycler ) {
    var $active = $(cycler + ' .active');
    var $next = ($active.next().length > 0) ? $active.next() : $(cycler + ' img:first');
    $next.css('z-index', 2); //move the next div up the pile
    $active.fadeOut(1500, function(){//fade out the top div
        $active.css('z-index', 1).show().removeClass('active');//reset the z-index and unhide the div
        $next.css('z-index', 3).addClass('active');//make the next div the top one
    });
}

/* Function that reveals skill icons in the Skills section on the hashchange event when hash changes to #skills */
function revealSkillIcons() {
    var time = 0;
    $('.skill-icon').each(function() {
        $(this).delay(time).fadeTo(300, 1);
        time += 300; // Not incrememnting the delay causes each fadeTo function to execute at the same time
    });
}

/* Function that reveals the timeline in Experience section on the hashchange event when hash changes to #experience */
function revealTimeline() {
    $('#timeline1').fadeTo(1000, 1);
    setTimeout(function(){
        $('#timeline2').fadeTo(1000, 1);
    }, 1000);
    setTimeout(function(){
        $('#timeline3').fadeTo(1000, 1);
    }, 2000);
}