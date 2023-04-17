import { El } from '@/library/El';
import { home } from '@/screen';
import { getProducts } from '@/service/api/tasks/read';

export const pruducts = () => {
  const elem = El({
    element: 'div',
  });
  getProducts(`Products`).then((res) => {
    render(elem, res.data);
  });
  return elem;
};

export const render = (elem, data) => {
  const el = El({
    element: 'div',
    className: 'flex flex-wrap justify-around items-center pl-2',
    children: data.map((item) => {
      return El({
        element: 'div',
        className: 'mb-16',
        children: [
          El({
            element: 'div',
            className:
              'w-40 h-40 bg-gray-100 !rounded-3xl  flex justify-center items-center mb-3  overflow-hidden',
            children: [
              El({
                element: 'img',
                src: item.images,
              }),
            ],
          }),
          El({
            element: 'p',
            children: item.title,
            className: 'font-bold text-lg mb-1 ml-5',
          }),
          El({
            element: 'span',
            children: `$ ${item.price}`,
            className: 'font-medium text-base ml-5',
          }),
          El({ element: 'div', className: '', children: '' }),
        ],
      });
    }),
  });
  return elem.append(el);
};
