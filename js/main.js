(function ($) {
    "use strict";

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 200,
            backSpeed: 60,
            smartBackspace: false,
            loop: true
        });
    }

    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
})(jQuery);

$(".timeline-Tweet").ready(function() {
    // var myElement = document.querySelector(".timeline-Tweet");
    // myElement.style.backgroundColor = "#25523B";
    $(".timeline-Tweet").css("background-color", "#25523B");
    $(".TweetAuthor").remove();
    $(".timeline-Tweet-metadata").remove();
    $(".timeline-Tweet-actions").remove();
    $(".timeline-Tweet-author").remove();
    $(".timeline-Tweet-brand").remove();
    });