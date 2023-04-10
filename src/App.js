import { El } from './library/El';
import { onBoardingPageOne } from './screen';
import { onBoardingPageTwo } from './screen/onBoardingPage/pages/2';

export const app = () => {
  return El({
    element: 'div',
    children: [onBoardingPageTwo()],
  });
};
