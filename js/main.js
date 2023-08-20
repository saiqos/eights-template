const element = document.querySelector('.header__nav-select')

const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: ''
})

$('.best-films__slider').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
});


$(document).ready(function () {
    $('.aside-menu-2__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 3000
    });
});


$('.compilations__slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
});
