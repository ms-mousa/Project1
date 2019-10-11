$(window).scroll(function() {
    if ($(window).scrollTop() >= 400) {
        $('.scrll--shadow').css({
            "animation": ""
        });
    } else {
        $('.scrll--shadow').css({
            "animation": "bounce 2s infinite"
        });
    }

})

$(document).ready(function() {
    $('.scrll--shadow').css({ "animation": "bounce 2s infinite" });
});