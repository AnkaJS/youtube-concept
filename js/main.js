const swiper = new Swiper('.channel_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 5,

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});
