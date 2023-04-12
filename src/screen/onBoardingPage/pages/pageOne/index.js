import { El } from '@/library/El';
export const onBoardingPageOne = () => {
  return El({
    element: 'div',
    className: 'h-screen w-screen flex flex-col justify-center items-center',
    children: [
      El({
        element: 'div',
        className: 'mb-20 flex gap-3',
        children: [
          El({
            element: 'div',
            className:
              'bg-black w-14 h-14 flex justify-center items-center rounded-full',
            children: [
              El({
                element: 'img',
                className: '',
                src: './src/assets/img/Vector 1.svg',
              }),
            ],
          }),
          El({
            element: 'img',
            src: './src/assets/img/Shoea.svg',
          }),
        ],
      }),
      El({
        element: 'img',
        className: 'absolute bottom-28 w-12',
        src: './src/assets/img/spinner.svg',
      }),
    ],
  });
};
