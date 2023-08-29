const swiperBrands = new Swiper('.section-brands__slider', {
  init: false,
  spaceBetween: 16,
  slidesPerView: 1.3,
  pagination: {
    el: '.section-brands__pagination'
  }
})

const swiperTechnique = new Swiper('.section-technique__slider', {
  init: false,
  spaceBetween: 16,
  slidesPerView: 1.3,
  pagination: {
    el: '.section-technique__pagination'
  }
})

const swiperServices = new Swiper('.section-services__slider', {
  init: false,
  spaceBetween: 16,
  slidesPerView: 1.1,
  width: 300,
  pagination: {
    el: '.section-services__pagination'
  }
})

window.addEventListener('resize', () => {
  if (window.innerWidth <= 321) {
    swiperBrands.init()
    swiperTechnique.init()
  }
})
window.addEventListener('resize', () => {
  if (window.innerWidth <= 500) {
    swiperServices.init()
  }
})
