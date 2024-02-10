
const swiper = new Swiper('.swiper', {
  autoplay: {
    delay: 2000,
  },
    slidesPerView: 1,
    spaceBetween: 10,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
    420: {
        slidesPerView: 1,
        spaceBetween: 10
    },
      // when window width is >= 480px
    580: {
        slidesPerView: 2,
        spaceBetween: 15
    },
      // when window width is >= 1200px
    1200: {
        slidesPerView: 3,
        spaceBetween: 20
    }
    },
    pagination: {
        el: '.pagination',
        bulletClass: 'pagination__button',
        bulletActiveClass: 'pagination__button--active',
        }
})