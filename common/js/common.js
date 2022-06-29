(function () {
    $(document).ready(function () {
        var $agents = [/(opr|opera)/gim, /(chrome)/gim, /(firefox)/gim, /(safari)/gim, /(msie[\s]+[\d]+)/gim, /(trident).*rv:(\d+)/gim];
        var $agent = navigator.userAgent.toLocaleLowerCase();
        for (var ag in $agents) {
            if ($agent.match($agents[ag])) {
                $(document.body).addClass(String(RegExp.$1 + RegExp.$2).replace(/opr/, 'opera').replace(/trident/, 'msie').replace(/\s+/, ''));
                break;
            }
        }
    });
})();


$(window).on('load resize', function () {
    $('.js-position').each(function () {
        var imgWidth = $(this).width() / 2;
        var imgHeight = $(this).height() / 2;
        $(this).css('margin-top', -imgHeight).css('margin-left', -imgWidth);
    });
});
$(window).trigger('resize');

var vsSwiper = new Swiper('.main .section01 .swiper-container', {
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',

    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1000,
    effect: "fade",
    centeredSlides: true,
    slidesPerView: "auto",
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});