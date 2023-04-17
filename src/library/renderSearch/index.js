import { getProducts } from '@/service/api/tasks/read';
import { renderSearchUi } from '../handleSearch';

let searchResult = JSON.parse(localStorage.getItem('searchResult')) || [];
export const renderSearch = () => {
  const elem = document.getElementById('search-page');
  let searchInput = document.getElementById('searchpage-input');
  getProducts(`Products?q=${searchInput.value}`).then((res) => {
    let searchInput = document.getElementById('searchpage-input');
    if (!searchInput.value == '' && res.data.length > 0) {
      searchResult.push(searchInput.value);
      localStorage.setItem(
        'searchResult',
        JSON.stringify(Array.from(new Set(searchResult)))
      );
      let informationSearch = document.getElementById('information-result');
      informationSearch.innerHTML = '';
      informationSearch.innerHTML = `<div class="flex mt-5 font-bold text-xl">
          <div>Result for <span class="font-bold">"${searchInput.value}</span>"</div>
          <div class="ml-auto">${res.data.length} founds</div>
          </div>`;
      elem.innerHTML = '';
      renderSearchUi(elem, res.data);
    } else {
      let informationSearch = document.getElementById('information-result');
      informationSearch.innerHTML = `<div class="flex mt-5 font-bold text-xl">
        <div>Result for <span class="font-bold">" ${searchInput.value}</span>"</div>
        <div class="ml-auto">0 founds</div>
        </div>`;
      const elem = document.getElementById('search-page');
      elem.innerHTML = '';
      elem.innerHTML = `<div class="flex flex-col gap-1 items-center justify-center">
            <img src="./src/assets/img/Doc.png" alt="" />
            <div class="text-center text-xl font-bold">Not Found</div>
            <p class="text-center p-10">
              Sorry,the keyword you entered cannot be found, please check again or
              search with another keyword
            </p>
          </div>`;
    }
  });
};
