import 'swiper/css/bundle';
import './src/styles/style.css';
import { app } from './src/App';
import { Router } from './src/library/routers';
// const shoesShop = document.getElementById('app');
// shoesShop.append(app());
Router().navigate(location.pathname);
