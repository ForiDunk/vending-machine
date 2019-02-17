import * as constants from '../constants';
import products from '../products';
import { updateObject } from '../utility';

const initialState = {
  products: [],
  balance: 0,
  selectedProduct: {},
  displayText: 'insert coin',
  boughtProduct: {}
};

const handleSelectProduct = (state, action) => {
  if (state.boughtProduct.name) {
    return state;

  } else if (!state.products[action.payload - 1].quantity) {
    return updateObject(state, {
      displayText: 'out of stock',
      selectedProduct: {}
    });
  }

  if (state.displayText === 'take product') {
    return state;
  }

  return updateObject(state, {
    selectedProduct: state.products[action.payload - 1], 
    displayText: state.products[action.payload - 1].name
  });
};

const handleAddCoin = (state, action) => {
  if (state.boughtProduct.name) {
    return state;
  }
  return updateObject(state, {balance: state.balance + action.payload, displayText: 'select product'});
}

const handleBuy = (state) => {
  if (state.boughtProduct.name) {
    return state;
  } else if (state.balance < state.selectedProduct.price) {
    return updateObject(state, {
      selectedProduct: {},
      displayText: 'insufficient funds'
    });
  } else if (!state.selectedProduct.name) {
    return updateObject(state, {
      displayText: 'select a product first'
    });
  } else if (!state.selectedProduct.quantity) {
    return updateObject(state, {
      displayText: 'out of stock',
      selectedProduct: {}
    });
  } else if (state.boughtProduct.name) {
    return state;
  }

  const updatedProducts = state.products;
  updatedProducts.map(product => product.code === state.selectedProduct.code ? product.quantity = state.selectedProduct.quantity - 1 : product);
  return {
    ...state,
    balance: state.balance - state.selectedProduct.price,
    products: [...updatedProducts],
    selectedProduct: {},
    displayText: 'take product',
    boughtProduct: state.selectedProduct
  };
};


const handleCashout = (state) => {
  if(state.boughtProduct.name) {
    return state;
  }
  return updateObject(state, {balance: 0, selectedProduct: {}, displayText: 'insert coin'});
};

const handleTakeProduct = (state) => {
  if (state.boughtProduct.name){
    let displayText = state.balance >= 0.5 ? 'select product' : 'insert coin';
    return updateObject(state, {boughtProduct: {}, displayText});
  }
  return state;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return updateObject(state, {products: products});
    case constants.SELECT_PRODUCT:
      return handleSelectProduct(state, action);
    case constants.ADD_COIN:
      return handleAddCoin(state, action);
    case constants.BUY:
      return handleBuy(state);
    case constants.CASHOUT:
      return handleCashout(state);
    case constants.TAKE_PRODUCT:
      return handleTakeProduct(state);
    default: 
      return state;
  }
};

export default reducer;