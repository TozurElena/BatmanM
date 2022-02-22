const sliderThumbs = new Swiper('.slider-thumbs', {
  loop: true,
  spaceBetween:20,
  loopSlides: 4,
  slidesPerView: 3,
  centeredSlides: true
});

sliderThumbs.on('click', (swiper) => {
  swiper.slideTo(swiper.clickedIndex)
})

const sliderMain = new Swiper('.slider-main', {
  // beskonechno
  loop: true,
  spaceBetween:20,
  loopSlides: 4,
    
});

sliderThumbs.controller.control = sliderMain;
sliderMain.controller.control = sliderThumbs;
