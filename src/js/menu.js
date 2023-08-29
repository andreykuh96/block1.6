const menuBtn = document.querySelector('[data-burger]')
const closeBtn = document.querySelectorAll('[data-close]')
const menu = document.querySelector('.aside')
const blur = document.querySelector('.blur')
const chatBtn = document.querySelectorAll('[data-chat]')
const chat = document.querySelector('.modal-feedback')
const callBtn = document.querySelectorAll('[data-call]')
const call = document.querySelector('.modal-call')

function closeAllWindows() {
  menu.classList.remove('aside_active')
  chat.classList.remove('modal-feedback_active')
  call.classList.remove('modal-call_active')
  blur.classList.remove('blur_active')
}

blur.addEventListener('click', (e) => {
  if (e.target === blur) {
    closeAllWindows()
  }
})

closeBtn.forEach((item) => {
  item.addEventListener('click', closeAllWindows)
})

menuBtn.addEventListener('click', () => {
  menu.classList.add('aside_active')
  blur.classList.add('blur_active')
})

chatBtn.forEach((item) => {
  item.addEventListener('click', () => {
    chat.classList.add('modal-feedback_active')
    blur.classList.add('blur_active')
  })
})

callBtn.forEach((item) => {
  item.addEventListener('click', () => {
    call.classList.add('modal-call_active')
    blur.classList.add('blur_active')
  })
})
