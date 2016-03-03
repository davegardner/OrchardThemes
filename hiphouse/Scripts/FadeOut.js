$(".fadeout-container").next().height($(".fadeout-container").height())
$(window).scroll(function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 100) {
        $('div.fadeout-container').css('opacity', 0);
    }
    else {
        $('div.fadeout-container').css('opacity', 1 - scrollTop / 100);
    }
}).scroll()