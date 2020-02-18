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
      let found = state.stocks.find(({ symbol }) => symbol === action.payload.symbol)
      if (!found) {
        // returns new object for state with stocks overwriting original value
        return Object.assign({}, state, {
          stocks: [
            action.payload,
            ...state.stocks
          ]
        });
      }
      else {
        return Object.assign({}, state, {
          stocks: state.stocks.map((stock) => {
            if (stock.symbol === action.payload.symbol) {
              console.log(stock);
              return Object.assign({}, stock, {
                price: action.payload.price
              })
            }
            return stock
          })
        })
      }
    default:
      return state;
  }
};

export default stockApp;