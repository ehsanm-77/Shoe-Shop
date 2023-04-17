import { getProducts } from '@/service/api/tasks/read';
// import { debounce } from 'lodash';
import { El } from '../El';
import { search } from '@/screen/searchPage';
import { renderSearch } from '../renderSearch';

// export let handleSearch = debounce((e) => {
// }, 2000);

export const handleSubmit = (e) => {
  e.preventDefault();
  renderSearch();
  console.log(e);
};

export const renderSearchUi = (elem, data) => {
  const el = El({
    element: 'div',
    id: 'search-items',
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
