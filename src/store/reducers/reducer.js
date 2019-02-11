import * as constants from '../constants';

const initialState = {
  products: [],
  balance: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.GET_PRODUCTS:
      return state;
    default: 
      return state;
  }
};

export default reducer;