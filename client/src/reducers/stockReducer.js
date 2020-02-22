import { ADD_STOCK, GET_STOCKS, SET_LOADING, STOCKS_ERROR, UPDATE_STOCK, REMOVE_STOCK } from '../actions/types';

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
      // returns new object for state with stocks overwriting original value
      return Object.assign({}, state, {
        stocks: [{
          ...action.payload,
          current: true
        },
        ...state.stocks
        ]
      })
    case UPDATE_STOCK:
      //if state already has a stock value for that symbol, updates price
      return Object.assign({}, state, {
        stocks: state.stocks.map((stock) => {

          if (stock.symbol === action.payload.symbol) {
            return Object.assign({}, stock, {
              price: action.payload.price,
              current: true
            })
          }
          return Object.assign({}, stock, {
            current: false
          });
        })
      });
    case REMOVE_STOCK:
      return Object.assign({}, state, {
        stocks: state.stocks.filter((stock) => {
          console.log(stock._id === action.id);
          console.log(action);
          if (stock._id !== action.id) {
            return stock
          }
        })
      })
    default:
      return state;
  }
};

export default stockApp;