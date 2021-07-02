import { all } from "redux-saga/effects"
import { produce } from "immer";
import { featureConf } from "../config";

export const namespace = 'cart';

// action types
//export const ADD_ITEM = `${namespace}/ADD_ITEM`;
//export const UPDATE_ITEM = `${namespace}/UPDATE_ITEM`;
//export const REMOVE_ITEM = `${namespace}/REMOVE_ITEM`;
//export const SET_FIELD = `${namespace}/SET_FIELD`;
export const ADD_ITEM = 'ADD_ITEM';
export const UPDATE_ITEM = 'UPDATE_ITEM';
export const REMOVE_ITEM = 'REMOVE_ITEM';
export const CLEAR_CART = 'CLEAR_CART';
export const SET_FIELD = 'SET_FIELD';
export const CHECK_ITEM = 'CHECK_ITEM';

// action creators
export function addItem(item) {
  console.log(item);
  return {
    type: ADD_ITEM,
    item,
  }
}

export function updateItem(id, item) {
  return {
    type: UPDATE_ITEM,
    id,
    item,
  }
}

export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    id,
  }
}

export function clearCart() {
  return {
    type: CLEAR_CART,
  }
}

export function checkItem() {
  return {
    type: CHECK_ITEM,
  }
}

export function setField(key, value) {
  return {
    type: SET_FIELD,
    key,
    value,
  }
}

// initial state
const initialState = {
  items: [
  ],
  numProducts: 8
};

const reducerReactionsMap = {
  [ADD_ITEM]: (state, action) => state,
};

// reducer
export function reducer(state = initialState, action) {
  let { type, id, item, key, value } = action;
  console.log('type');
  console.log(type);
  switch (type) {
    case ADD_ITEM:
      /*
      alert('here');
      console.log(type);
      console.log(id);
      console.log(item);
      console.log(key);
      console.log(value);
      */
      return produce(state, (s) => {
        //s.items.push(item);
        let index = s.items.findIndex((el) => el.id == item);
        if (index > -1) {
          s.items[index].qty = s.items[index].qty + 1;
        } else {
          let prod = {
            id:item,
            qty:1
          };
          s.items.push(prod);
        }

        /*
        let prod = {
          id:item,
          qty:1
        }

         */

        s.numProducts = s.numProducts + 1;
        console.log(s.items);

      });
      /*
        let numProducts = state.numProducts;

        return produce(state, (s) => {
          let prod = {
            id:item,
            qty:1
          }
          s.items.push(prod);
          console.log('-------------',s.numProducts);
          s.numProducts = s.numProducts + 1;
     */
    case UPDATE_ITEM:
      return produce(state, (s) => {
        let index = s.items.findIndex(el => el.id === id);
        if (index > -1) {
          s.items[index] = {
            ...s.items[index],
            ...item,
          };
        }
      });

    case REMOVE_ITEM:
      return produce(state, (s) => {
        let index = s.items.findIndex(el => el.id === id);
        if (index > -1) {
          s.items.splice(index, 1);
        }
      });

    case CLEAR_CART:
      return produce(state, (s) => {

       //   s.items.splice(0,  s.items.length - 1);
        s.items = [];
        s.numProducts = 0;

      });

    case CHECK_ITEM:
      return produce(state, (s) => {
        let result = false;
        let index = s.items.findIndex((el)=>el.id == item);
        if (index > -1) result = true;
        console.log(result);

      });



    case SET_FIELD:
      return produce(state, s => {
        s[key] = value;
      });

    default:
      //alert('default');
      return state;
  }
}

// selectors
export const selectField = (s,key) => s[namespace][key];
export const selectNumProducts = (s) => selectField(s,'numProducts');
export const selectItems = state => state[namespace].items;
export const selectIsInCart = (s,item) => {let index = s.items.findIndex((el)=>el.id == item);
                                            if (index > -1) return true
                                            else return false};


//export const selectNumProducts = (s) => 7;







