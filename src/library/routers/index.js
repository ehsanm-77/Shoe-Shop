import Navigo from 'navigo';
import { home, onBoardingPageOne } from '@/screen';
import { auth } from '@/screen/auth';
import { onBoardingPageTwo } from '@/screen/onBoardingPage/pages/pageTwo';
import { StartSlider } from '@/screen/onBoardingPage/pages/sliderPage';

const changePage = (page) => {
  const app = document.getElementById('app');
  app.innerHTML = '';
  app.appendChild(page());
};

setTimeout(function () {
  router.navigate('/');
}, 3000);

setTimeout(function () {
  router.navigate('/wellcome');
}, 3000);

// Automatically switch to slider page after another 3 seconds
setTimeout(function () {
  router.navigate('/slider');
}, 6000);

let router = new Navigo('/');
export const Router = () => {
  console.log('hi router');
  router
    .on('/', () => {
      changePage(onBoardingPageOne);
    })
    .on('/wellcome', () => {
      changePage(onBoardingPageTwo);
    })
    .on('/slider', () => {
      changePage(StartSlider);
    })
    .on('/login', () => {
      changePage(auth);
    })
    .on('/home', () => {
      changePage(home);
    });
  //   router.resolve();
  return router;
};
