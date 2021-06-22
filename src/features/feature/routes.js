import { FeaturePage } from './pages/FeaturePage';
import { featureConf } from "./config";

export const routes = [
  {
    key: `${featureConf}/home`,
    path: '/',
    component: FeaturePage,
    exact: true,
  },
];
