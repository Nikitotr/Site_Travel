// для открития меню нажав на кнопку
import mobileNav from './modules/mobile-nav.js';
// импортируем лоадер
import loader from './modules/loader.js';


mobileNav(); 
// вызиваем лоадер
loader();


// свайпер - слайдер
// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

// init Swiper:
const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    parallax: true,
    speed: 1000,

    // листать слады с помощью клавиатуры
    keyboard: {
        enabled:true,
    },
  
    // If we need pagination min 1:53
    pagination: {
      el: '.slider-controls__count',
      type: 'fraction',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '#sliderNext',
      prevEl: '#sliderPrev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
