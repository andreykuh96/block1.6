document.addEventListener('DOMContentLoaded', () => {
  const more = document.querySelector('.more')
  const textBlock = document.querySelector('.section-promo__text')

  more.addEventListener('click', () => {
    if (more.classList.contains('more')) {
      more.classList.add('more_hide')
      textBlock.classList.add('section-promo__text_show')
    }
  })
})
