import * as constants from '../constants';
import products from '../products';

const initialState = {
  products: [],
  balance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return {
        ...state,
        products
      };
    default: 
      return state;
  }
};

export default reducer;