import { render } from '@/components/home';
import { El } from '@/library/El';
import { handleSubmit, renderSearchUi } from '@/library/handleSearch';
import { renderSearch } from '@/library/renderSearch';
import { showResult } from '@/library/showResult';
import { getProducts } from '@/service/api/tasks/read';

export const resultElements = () => {
  const searchResultList = document.getElementById('searchResultList');
  searchResultList.innerHTML = '';
  let array = JSON.parse(localStorage.getItem('searchResult'));
  let result = El({
    element: 'div',
    className: 'w-full flex justify-between mb-5 border-b pb-2',
    children: [
      El({
        element: 'div',
        className: 'text-xl font-bold',
        children: 'Result',
      }),
      El({
        element: 'div',
        className: 'text-xl font-bold',
        onclick: () => {
          localStorage.clear('searchResult');
          resultElements();
        },
        children: 'Clear All',
      }),
    ],
  });
  searchResultList.append(result);
  if (array !== null) {
    array.map((item) => {
      searchResultList.append(
        El({
          element: 'div',
          id: '',
          className: 'items flex justify-between',
          children: [
            El({
              element: 'p',
              className: 'text-gray-400 text-xl mb-3',
              innerHTML: item,
            }),
            El({
              element: 'img',
              className: '',
              id: 'delete-search',
              onclick: (e) => {
                array = array.filter((item) => {
                  console.log(
                    item,
                    e.target.closest('.items').children[0].innerHTML
                  );
                  return (
                    item !== e.target.closest('.items').children[0].innerHTML
                  );
                });
                localStorage.setItem(
                  'searchResult',
                  JSON.stringify(Array.from(new Set(array)))
                );
                resultElements();
              },
              src: './src/assets/img/Close Square.svg',
            }),
          ],
        })
      );
    });
  }
};

export const search = () => {
  setTimeout(() => {
    showResult();
  }, 0);
  return El({
    element: 'div',
    children: [
      El({
        element: 'div',
        className: 'relative p-6',
        children: [
          El({
            element: 'form',
            className: '',
            name: 'search',
            id: 'search-form',
            eventListener: [
              {
                event: 'submit',
                callback: handleSubmit,
              },
            ],
            children: [
              El({
                element: 'input',
                type: 'text',
                id: 'searchpage-input',
                placeholder: 'Search',
                className:
                  'py-3 w-full pl-10 bg-gray-100 placeholder:text-slate-400 text-slate-800 rounded-xl border-none focus:ring-black focus:outline-none',
              }),
              El({
                element: 'div',
                id: 'information-result',
              }),
              El({
                element: 'img',
                name: 'search',
                src: './src/assets/img/home-icon/search.svg',
                className:
                  'absolute top-[38px] align-top left-9 text-xl text-gray-400',
              }),
              El({
                element: 'img',
                name: 'options',
                id: 'searchButton',
                src: './src/assets/img/Filter 5.svg',
                className:
                  'absolute top-[38px] align-top right-9 text-xl text-gray-400',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'w-full absolute flex flex-col py-5 px-10 bg-white gap-3 top-20 hidden',
        id: 'searchResultList',
      }),
      El({ element: 'div', className: '', id: 'search-page' }),
    ],
  });
};
