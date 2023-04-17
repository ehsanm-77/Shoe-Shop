import { resultElements } from '@/screen/searchPage';
import { getProducts } from '@/service/api/tasks/read';
import { renderSearchUi } from '../handleSearch';
import { renderSearch } from '../renderSearch';

export const showResult = () => {
  const searchButton = document.getElementById('searchButton');
  searchButton.addEventListener('click', () => {
    resultElements();
    const searchResultList = document.getElementById('searchResultList');
    for (const child of searchResultList.children) {
      child.addEventListener('click', (e) => {
        const elem = document.getElementById('search-page');
        let searchInput = document.getElementById('searchpage-input');
        if (
          e.target.innerText !== 'Result' &&
          e.target.innerText !== 'Clear All' &&
          searchInput.value !== ''
        ) {
          searchInput.value = e.target.innerText;
          searchResultList.classList.add('hidden');
          getProducts(`Products?q=${searchInput.value}`).then((res) => {
            elem.innerHTML = '';
            renderSearch();
            renderSearchUi(elem, res.data);
          });
        }
      });
    }
    searchResultList.classList.toggle('hidden');
    if (!searchResultList.classList.contains('hidden')) {
    } else if (searchResultList.classList.contains('hidden')) {
      const elem = document.getElementById('search-page');
      let searchInput = document.getElementById('searchpage-input');
      searchInput.value = '';
      // getProducts(`Products?q=${searchInput.value}`).then((res) => {
      //   renderSearchUi(elem, res.data);
      // });
    }
  });
};
