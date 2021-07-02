import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/*
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

import * as CartDuck from './features/cart/ducks/cart.duck';
import produce from "immer";

const rootReducer = combineReducers({

    [CartDuck.namespace]: CartDuck.default,

});

export const store = createStore(rootReducer); //

window.store = store;
window.CartDuck = CartDuck;
window.produce = produce;
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
