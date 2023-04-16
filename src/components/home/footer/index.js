import { El } from '@/library/El';

export const footer = () => {
  const icons = [
    { src: './src/assets/img/home-icon/home-select.svg', text: 'Home' },
    { src: './src/assets/img/home-icon/cart.svg', text: 'Cart' },
    { src: './src/assets/img/home-icon/orders.svg', text: 'Orders' },
    { src: './src/assets/img/home-icon/wallet.svg', text: 'Wallet' },
    { src: './src/assets/img/home-icon/profile.svg', text: 'Profile' },
  ];

  const footerItems = icons.map((icon) => {
    return El({
      element: 'div',
      className: 'flex flex-col',
      children: [
        El({
          element: 'button',
          children: [
            El({
              element: 'img',
              src: icon.src,
            }),
          ],
        }),
        El({
          element: 'span',
          className: 'text-xs',
          children: icon.text,
        }),
      ],
    });
  });
  return El({
    element: 'div',
    className:
      'w-full fixed bottom-0 py-2 flex gap-x-10 justify-center items-center bg-white',
    children: footerItems,
  });
};
