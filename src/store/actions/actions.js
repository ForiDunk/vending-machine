import * as constants from '../constants';

export const getProducts = () => {
  return {
    type: constants.GET_PRODUCTS
  };
};

export const selectProduct = (keyValue) => {
  if (keyValue === 'Buy') {
    return {
      type: constants.BUY
    };
  }

  if (keyValue === 'Cashout') {
    return {
      type: constants.CASHOUT
    };
  }

  return {
    type: constants.SELECT_PRODUCT,
    payload: keyValue
  };
};

export const addCoin = (value) => {
  return {
    type: constants.ADD_COIN,
    payload: value
  };
}

export const takeProduct = () => {
  return {
    type: constants.TAKE_PRODUCT
  };
}