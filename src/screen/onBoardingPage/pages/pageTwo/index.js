import { El } from '@/library/El';
export const onBoardingPageTwo = () => {
  return El({
    element: 'div',
    className:
      'hh h-screen w-screen flex flex-col justify-end items-start bg-[url("./src/assets/img/WallpaperDog-205346101.jpg")] bg-cover bg-center',
    children: [
      El({
        element: 'div',
        className:
          'absolute h-screen w-screen bg-gradient-to-b from-transparent to-black z-10',
      }),
      El({
        element: 'div',
        className: 'flex flex-end mx-[32px] z-20',
        children: [
          El({
            element: 'div',
            className: '',
            children: [
              El({
                element: 'div',
                className: 'flex gap-3 items-center',
                children: [
                  El({
                    element: 'p',
                    className: 'text-white text-[40px] font-semibold',
                    children: 'Wellcome to',
                  }),
                  El({
                    element: 'div',
                    className: 'text-white text-[36px]',
                    children: '👋',
                  }),
                ],
              }),
              El({
                element: 'p',
                className: 'text-[70px] text-white font-bold',
                children: 'Shoea',
              }),
              El({
                element: 'p',
                className: 'text-[16px] text-white mb-[80px]',
                children:
                  'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
              }),
            ],
          }),
        ],
      }),
    ],
  });
};
