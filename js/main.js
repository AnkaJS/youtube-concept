const channelSlider = new Swiper('.channel_slider', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next',
    prevEl: '.channel-button-prev',
  },
});

const recommendedChannelSlider = new Swiper('.channel_slider_rec-video', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1600: {
      slidesPerView: 3
    },
    1100: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-prev-rec-video',
    prevEl: '.channel-button-next-rec-video',
  },
});

const recommendedSlider = new Swiper('.channel_slider_rec', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    1900: {
      slidesPerView: 6
    },
    1600: {
      slidesPerView: 5
    },
    1300: {
      slidesPerView: 4
    },
    1100: {
      slidesPerView: 3
    },
    800: {
      slidesPerView: 2
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: '.channel-button-next-rec',
    prevEl: '.channel-button-prev-rec',
  },
});
const searchBtn = document.querySelector('.mobile_search');
const mobileSearch = document.querySelector('.input_group');
searchBtn.addEventListener('click', () => {
  mobileSearch.classList.toggle('is-open')
});

if (document.documentElement.scrollWidth <= 640) {
  channelSlider.destroy()
  recommendedChannelSlider.destroy()
  recommendedSlider.destroy()
}