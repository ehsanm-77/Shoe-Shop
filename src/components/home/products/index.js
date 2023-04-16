import { El } from '@/library/El';

export const pruducts = () => {
  const items = [
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
    {
      imgSrc: './src/assets/img/products/shoe.png',
      title: 'K-Swiss ista Train...',
      price: '$ 85.00',
    },
  ];

  return El({
    element: 'div',
    className: 'flex flex-wrap justify-around items-center pl-2',
    children: items.map((item) => {
      return El({
        element: 'div',
        className: 'mb-16',
        children: [
          El({
            element: 'div',
            className:
              'w-40 h-40 bg-gray-100 rounded-3xl flex justify-center items-center mb-3',
            children: [
              El({
                element: 'img',
                src: item.imgSrc,
              }),
            ],
          }),
          El({
            element: 'p',
            children: item.title,
            className: 'font-bold text-lg mb-1',
          }),
          El({
            element: 'span',
            children: item.price,
            className: 'font-medium text-base',
          }),
        ],
      });
    }),
  });
};
