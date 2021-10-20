var html = $("html");
html.css("overflow", "hidden");

window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
});

$(window).on("load",function(){
    $("#preloader").delay(1000).fadeOut(750);
    html.css("overflow", "");
});