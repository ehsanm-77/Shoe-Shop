import { Router } from '@/library';
import { El } from '@/library/El';
import Swiper from 'swiper/bundle';

const slides = [
  {
    text: 'We provide high quality products just for you',
    src: './src/assets/img/W1.jpg',
  },
  {
    text: 'Your satisfaction is our number one periority',
    src: './src/assets/img/W2.jpg',
  },
  {
    text: 'Let’s fulfill your fashion needs with shoearight now!',
    src: './src/assets/img/W3.jpg',
  },
];
export const slider = (slide) => {
  return El({
    element: 'div',
    className: 'swiper-slide w-full flex flex-col',
    children: [
      El({
        element: 'div',
        className: 'w-full overflow-hidden',
        children: [
          El({
            element: 'img',
            className: 'w-full h-full',
            src: slide.src,
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full flex items-center justify-center',
        children: [
          El({
            element: 'span',
            className:
              'w-full px-4 py-4 text-center text-black text-[28px] font-semibold mx-1',
            innerText: slide.text,
          }),
        ],
      }),
    ],
  });
};
const configSwiper = () => {
  let swiper = new Swiper('.swiper', {
    pagination: {
      el: '.swiper-pagination',
    },
    allowTouchMove: false,
  });
};
export const StartSlider = () => {
  setTimeout(configSwiper, 0);
  return El({
    element: 'div',
    id: 'first-slider',
    className:
      'w-full h-full pb-4 flex flex-col items-center justify-end tall:justify-between transition ease-linear duration-500 transform',
    children: [
      El({
        element: 'div',
        className: 'w-full swiper',
        children: [
          El({
            element: 'div',
            className: 'swiper-wrapper mb-10',
            children: [...slides.map((item) => slider(item))],
          }),
          El({
            element: 'div',
            className: 'swiper-pagination',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'w-full text-center mt-8 px-4',
        children: [
          El({
            element: 'button',
            className: 'w-full bg-dark p-4 text-white rounded-full',
            children: 'Next',
            eventListener: [
              {
                event: 'click',
                callback: (e) => {
                  const swiper = document.querySelector('.swiper').swiper;
                  // Now you can use all slider methods like
                  swiper.slideNext();
                  if (e.target.innerText === 'Get Started') {
                    Router().navigate('/login');
                  }
                  swiper.activeIndex == 2
                    ? (e.target.innerText = 'Get Started')
                    : null;
                },
              },
            ],
          }),
        ],
      }),
    ],
  });
};
