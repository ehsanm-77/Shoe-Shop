import { El } from '@/library';
import { filterBrands } from '@/components/home';
import { footer } from '@/components/home';
import { pruducts } from '@/components/home';

const brands = [
  'Adidas',
  'Nike',
  'Puma',
  'Asics',
  'Reebok',
  'New Balance',
  'Converse',
  'More',
];
export const home = () => {
  return El({
    element: 'div',
    children: [
      El({
        element: 'nav',
        className: 'flex justify-between px-6 pt-4 pb-6',
        children: [
          El({
            element: 'div',
            className: 'flex gap-x-4',
            children: [
              El({
                element: 'div',
                children: [
                  El({
                    element: 'img',
                    src: './src/assets/img/Profile/photo1681469214.jpeg',
                    className: 'rounded-full w-12 h-12',
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'flex flex-col',
                children: [
                  El({
                    element: 'span',
                    children: 'Good Morning 👋',
                    className: 'text-gray-500',
                  }),
                  El({
                    element: 'span',
                    children: 'Ehsan',
                    className: 'font-bold',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-x-3',
            children: [
              El({
                element: 'img',
                src: './src/assets/img/Alert.svg',
              }),
              El({
                element: 'img',
                src: './src/assets/img/Heart.svg',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'relative px-5 pb-6',
        children: [
          El({
            element: 'input',
            type: 'text',
            placeholder: 'Search',
            className:
              'py-2 w-full pl-10 bg-slate-50 placeholder:text-slate-300 text-slate-500 rounded border-none focus:border-none focus:outline-none',
          }),
          El({
            element: 'img',
            className: 'absolute top-3 left-7',
            src: './src/assets/img/input-prefix.svg',
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'px-4 pb-7 grid grid-cols-4 justify-center items-center gap-x-5 gap-y-8',
        children: brands.map((brand) => {
          return El({
            element: 'div',
            className: 'flex flex-col items-center',
            children: [
              El({
                element: 'button',
                className:
                  'w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center mb-4',
                children: [
                  El({
                    element: 'img',
                    className: 'bg-gray-200',
                    src: './src/assets/img/Logo/' + brand + '.png',
                  }),
                ],
              }),
              El({
                element: 'span',
                className: ' whitespace-nowrap text-ellipsis',
                children: brand.charAt(0).toUpperCase() + brand.slice(1),
              }),
            ],
          });
        }),
      }),
      El({
        element: 'div',
        className: 'flex justify-between items-center px-6',
        children: [
          El({
            element: 'h2',
            children: 'Most Popular',
            className: 'font-medium text-lg text-black',
          }),
          El({
            element: 'a',
            href: '',
            children: 'See All',
            className: 'text-gray-500 text-sm',
          }),
        ],
      }),
      filterBrands(),
      pruducts(),
      footer(),
    ],
  });
};
