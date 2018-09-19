$(document).ready(function () {
    // Configuration for ScrollReveal
    window.sr = ScrollReveal();
    sr.reveal('.anim-r', {
        origin: 'right',
        delay: 200
    });
    sr.reveal('.anim-li', {
        delay: 500,
        origin: 'right'
    }, 100);
    sr.reveal('.anim-b', {
        origin: 'bottom',
        delay: 200
    });

    progressively.init({
        delay: 50,
        throttle: 400
    });

    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 60
        }, 800);
    });
});