import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";
import { CatalogPage } from "./pages/CatalogPage";
import { ProductPage } from "./pages/ProductPage";
import { AlikeProductsPage } from "./pages/AlikeProductsPage";
import { CreateProductPage } from "./pages/CreateProductPage";
import { UpdateProductPage } from "./pages/UpdateProductPage";

export const routes = [
  {
    key: `${featureConf}/catalog`,
    path: '/catalog',
    component: CatalogPage,
    exact: true,
  },

  {
    key: `${featureConf}/products`,
    path: '/products/:id',
    component: ProductPage,
    exact: true,
  },
  {
    key: `${featureConf}/products`,
    path: '/alike/:category',
    component: AlikeProductsPage,
    exact: true,
  },
  /*
{
  key: `${featureConf}/create-product`,
  path: '/new-product',
  component: CreateProductPage,
  exact: true,
},
{
  key: `${featureConf}/update-product`,
  path: '/update-product/:id',
  component: UpdateProductPage,
  exact: true,
},
   */
];
