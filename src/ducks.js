import { ducks as feature } from "./features/feature/ducks";
import { ducks as cart } from "./features/cart/ducks";

export const ducks = [
  // put here features' ducks
  ...feature,
  ...cart,
];
