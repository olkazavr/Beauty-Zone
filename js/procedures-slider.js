
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 15,
    breakpoints: {
        768: {
        slidesPerView: 2,
        },
        1280: {
        slidesPerView: 3,
        },
    },
    pagination: {
    el: '.pagination',
    bulletClass: 'pagination__button',
    bulletActiveClass: 'pagination__button--active',
    },
    navigation: {
        nextEl: '.button-next',
        prevEl: '.button-prev',
    },
}
);