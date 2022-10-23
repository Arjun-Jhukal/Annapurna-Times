$(document).ready(function() {
    $("#btn-top").click(function() {
        $('html, body').animate({
            scrollTop: $("#top").offset().top
        }, 500);
    });
});

const d = new Date();
d.setMonth(11);
document.getElementById("date").innerHTML = d;