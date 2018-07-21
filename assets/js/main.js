$(document).ready(function () {
    $('#nav-icon3').on('click', function (e) {
        var collapse = $(".navbar-collapse");
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

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 800);
    });
});
