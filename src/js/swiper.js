window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (breakpoint, swiperClass, swiperSettings) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) swiper.destroy(true, true)
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  //brands

  resizableSwiper('(max-width: 767px)', '.section-brands__swiper', {
    spaceBetween: 16,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 700px)', '.section-brands__swiper', {
    spaceBetween: 16,
    slidesPerView: 2.1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 480px)', '.section-brands__swiper', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  //technique

  resizableSwiper('(max-width: 767px)', '.section-technique__swiper', {
    spaceBetween: 16,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 700px)', '.section-technique__swiper', {
    spaceBetween: 16,
    slidesPerView: 2.1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 480px)', '.section-technique__swiper', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  //services

  resizableSwiper('(max-width: 767px)', '.section-services__slider', {
    spaceBetween: 16,
    slidesPerView: 3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 700px)', '.section-services__slider', {
    spaceBetween: 16,
    slidesPerView: 2.1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })

  resizableSwiper('(max-width: 480px)', '.section-services__slider', {
    spaceBetween: 16,
    slidesPerView: 1.3,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
})
