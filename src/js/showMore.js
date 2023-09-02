const brandsBtn = document.querySelector('.section-brands__more')
const brandsBlock = document.querySelector('.section-brands__swiper')

brandsBtn.addEventListener('click', () => {
  if (brandsBtn.innerHTML == 'Показать все') {
    brandsBlock.style.height = '100%'
    brandsBtn.innerHTML = 'Скрыть'
  } else {
    brandsBlock.style.height = '160px'
    brandsBtn.innerHTML = 'Показать все'
  }
})

const techniqueBtn = document.querySelector('.section-technique__more')
const techniqueBlock = document.querySelector('.section-technique__swiper')

techniqueBtn.addEventListener('click', () => {
  if (techniqueBtn.innerHTML == 'Показать все') {
    techniqueBlock.style.height = '100%'
    techniqueBtn.innerHTML = 'Скрыть'
  } else {
    techniqueBlock.style.height = '160px'
    techniqueBtn.innerHTML = 'Показать все'
  }
})
