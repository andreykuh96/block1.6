const showBrand = document.querySelector('[data-brand]')
const brands = document.querySelector('.section-brands__slider')
const showTechnique = document.querySelector('[data-technique]')
const technique = document.querySelector('.section-technique__slider')

showBrand.addEventListener('click', () => {
  if (showBrand.innerHTML === 'Показать все') {
    brands.style.height = '100%'
    showBrand.innerHTML = 'Скрыть'
  } else {
    brands.style.height = '165px'
    showBrand.innerHTML = 'Показать все'
  }
})

showTechnique.addEventListener('click', () => {
  if (showTechnique.innerHTML === 'Показать все') {
    technique.style.height = '100%'
    showTechnique.innerHTML = 'Скрыть'
  } else {
    technique.style.height = '161px'
    showTechnique.innerHTML = 'Показать все'
  }
})
