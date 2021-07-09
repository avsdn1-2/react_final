import { ducks as feature } from "./features/feature/ducks";
import { ducks as cart } from "./features/cart/ducks";
import { ducks as order } from "./features/order/ducks";
import { ducks as catalog } from "./features/catalog/ducks";

export const ducks = [
  // put here features' ducks
  ...feature,
  ...order,
  ...cart,
  ...catalog,
];
