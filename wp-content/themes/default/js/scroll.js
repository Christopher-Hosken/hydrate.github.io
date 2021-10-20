$(function () {
    $(document).scroll(function () {
        updatescroll();
    });

    function updatescroll() {
        var header = $("#header");
        header.toggleClass('scrolled', $(this).scrollTop() > 300);
    }
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - 100
    }, 700);
});

AOS.init({
    duration: 750,
    once: true
})