$(window).scroll(function () {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#return-to-top').fadeIn();
    } else {
        $('#return-to-top').fadeOut();
    }
});
$(document).ready(function () {
    $("#return-to-top").click(function (event) {
        event.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        }, "slow");
        return false;
    });

});

// page loader 

let loader = document.getElementById("loader");

window.addEventListener("load", function () {

    loader.style.visibility = "hidden";

});


// to delay animations until the page loader has finished

document.body.classList.add('js-loading');

window.addEventListener("load", showPage);

function showPage() {
    document.body.classList.remove('js-loading');
}