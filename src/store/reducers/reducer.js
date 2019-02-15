import * as constants from '../constants';
import products from '../products';
import { updateObject } from '../utility';

const initialState = {
  products: [],
  balance: 0,
  selectedProduct: {},
  displayText: 'insert coin'
};

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case constants.GET_PRODUCTS:
      return updateObject(state, {
        products: products
      });

    case constants.SELECT_PRODUCT:
      return updateObject(state, {
        selectedProduct: state.products[action.payload - 1], 
        displayText: state.products[action.payload - 1].name
      });

    case constants.ADD_COIN:
      return updateObject(state, {
        balance: state.balance + action.payload, 
        displayText: 'select product'
      });

    case constants.BUY:
      if (state.balance < state.selectedProduct.price) {
        return updateObject(state, {
          displayText: 'insufficient funds'
        });
      } else if (!state.selectedProduct.name) {
        return updateObject(state, {
          displayText: 'select a product first'
        });
      }

      const updatedProducts = state.products;
      updatedProducts.map(product => product.code === state.selectedProduct.code ? product.quantity = state.selectedProduct.quantity - 1 : product);
      return {
        ...state,
        balance: state.balance - state.selectedProduct.price,
        products: [...updatedProducts],
        selectedProduct: {},
        displayText: 'take product'
      };

    case constants.CASHOUT:
      return updateObject(state, {
        balance: 0,
        selectedProduct: {},
        displayText: 'insert coin'
      });

    default: 
      return state;
  }
};

export default reducer;