import { El } from './library/El';
import { onBoarding } from './screen';

export const app = () => {
  return El({
    element: 'div',
    children: [onBoarding()],
  });
};
