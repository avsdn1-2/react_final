import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";
import { CategoriesPage } from "./pages/CategoriesPage";


export const routes = [
  {
    key: `${featureConf}/categories`,
    path: '/categories',
    component: CategoriesPage,
    exact: true,
  },

];
