import * as constants from '../constants';

export const getProducts = () => {
  return {
    type: constants.GET_PRODUCTS
  };
};

export const selectProduct = (keyValue) => {
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