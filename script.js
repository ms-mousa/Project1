$(window).scroll(function() {
    if ($(window).scrollTop() >= 200) {
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
    $('.mobileNav').click(function() {
        $('.nav--hidden').slideToggle("slow")
    });
    var imageup = document.getElementsByClassName("parallax");
    new simpleParallax(imageup, {
        overflow: true,
    });
    var imagert = document.getElementsByClassName('parallaxRt');
    new simpleParallax(imagert, {
        overflow: true,
        orientation: 'right'
    });
    var imagelt = document.getElementsByClassName('parallaxLt');
    new simpleParallax(imagelt, {
        overflow: true,
        orientation: 'left'
    });
});



// $(document).ready(function() {
//     document.querySelector(".arrow--big").addEventListener("click", function() {
//         $(".fimg").removeClass("img1").addClass("img2");
//         $(".simg").removeClass("img2").addClass("img1");

//     })
// })