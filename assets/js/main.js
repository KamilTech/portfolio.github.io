$(document).ready(function () {
    $('#nav-icon3').click(function (e) {
        let collapse = $(".navbar-collapse");
        e.preventDefault();
        if (collapse.hasClass("collapsing")) {
            e.preventDefault();
        } else {
            if (collapse.hasClass("show")) {
                $(this).removeClass('open');
            } else {
                $(this).addClass('open');
            }
        }
    });
});
