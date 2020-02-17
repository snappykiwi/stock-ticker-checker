import { ADD_STOCK, GET_STOCKS, SET_LOADING, STOCKS_ERROR } from '../actions/types';

const initialState = {
  stocks: [],
  loading: false,
  error: null
};

const stockApp = (state = initialState, action) => {

  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload,
        loading: false
      }
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOCKS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ADD_STOCK:
      return Object.assign({}, state, {
        stocks: [
          {
            symbol: action.payload.symbol,
            price: action.payload.price
          },
          ...state.stocks
        ]
      });
    default:
      return state;
  }
};

export default stockApp;