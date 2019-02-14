import * as constants from '../constants';
import products from '../products';
import { updateObject } from '../utility';

const initialState = {
  products: [],
  balance: 0,
  selectedProduct: {}
};

const handleSelectProduct = (keyValue, state) => {
  let selected = {};
  state.products.map(product => {
    if (product.code === keyValue) {
      selected = product;
    }
    if (keyValue === 'Clear') {
      selected = {};
    }
    if (keyValue === 'Buy') {
      selected = {};
    }
  });
  return selected;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return updateObject(state, {products: products});
    case constants.SELECT_PRODUCT:
      return updateObject(state, {selectedProduct: handleSelectProduct(action.payload, state)});
    case constants.ADD_COIN:
      return updateObject(state, {balance: state.balance + action.payload});
    default: 
      return state;
  }
};

export default reducer;