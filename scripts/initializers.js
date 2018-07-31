function ready (fn) {
  if (document.attachEvent ? document.readyState === 'complete' : document.readyState !== 'loading') {
    fn()
  } else {
    document.addEventListener('DOMContentLoaded', fn)
  }
}

ready(() => {
  MicroModal.init({
    disableScroll: true,
    disableFocus: true
  })

  let carousel = new Swiper ('.swiper-container', {
    loop: true,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    autoplay: { delay: 10000 },
    keyboard: { enabled: true },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  })
})
