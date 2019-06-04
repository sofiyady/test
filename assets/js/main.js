$('document').ready(function () {
    $(".fancybox").fancybox({
        openEffect: "true",
        closeEffect: "true"
    });
    $(".zoom").hover(function () {
        $(this).addClass('transition');
    }, function () {
        $(this).removeClass('transition');
    });
});
