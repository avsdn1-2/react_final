import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { DeliveryPage } from './pages/DeliveryPage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/home`,
    path: '/',
    component: HomePage,
    exact: true,
  },
  {
    key: `${featureConf}/about`,
    path: '/about',
    component: AboutPage,
    exact: true,
  },
  {
    key: `${featureConf}/delivery`,
    path: '/delivery',
    component: DeliveryPage,
    exact: true,
  },
];
