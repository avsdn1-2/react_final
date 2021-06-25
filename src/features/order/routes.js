import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";

import { CreateOrderPage } from "./pages/CreateOrderPage";


export const routes = [
  {
    key: `${featureConf}/order`,
    path: '/order',
    component: CreateOrderPage,
    exact: true,
  },

];
