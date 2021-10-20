var p = $("#video-overlay");
const hv = document.querySelector("#back_video");
var html = $("html");

$("#showreel-button").click(function () {
    p.css("display", "block");
    p.css("visibility", "visible").css("opacity", "1");
    html.css("overflow", "clip")
    hv.pause();
});

p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css("display", "none");
        stopVideo();
    }
});

$("#video-close").click(function () {
    html.css("overflow", "")
    p.css("visibility", "hidden").css("opacity", "0");
    stopVideo();
});

//video popup
function stopVideo() {
    $('.video_frame').each(function(){
        this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*')
    });
    hv.play();
}

p.click(function (event) {
    e = event || window.event;
    if (e.target == this) {
        $(p).css("visibility", "hidden").css("opacity", "0");
        html.css("overflow", "")
        stopVideo();
    }
});