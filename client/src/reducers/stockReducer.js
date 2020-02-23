import { ADD_STOCK, GET_STOCKS, STOCKS_ERROR, UPDATE_STOCK, REMOVE_STOCK } from '../actions/types';

const initialState = {
  stocks: [],
  loading: true,
  error: null
};


const stockApp = (state = initialState, action) => {

  switch (action.type) {
    case GET_STOCKS:
      return {
        ...state,
        stocks: action.payload.map((stock) => {
          let stockTrend = 0;
          const lastPriceIndex = stock.pastStats.length - 2
          if (lastPriceIndex >= 0) {
            stockTrend = stock.price - stock.pastStats[lastPriceIndex].price;
          }

          return {
            ...stock,
            stockTrend
          };

        }),
        loading: false
      };
    case STOCKS_ERROR:
      return {
        ...state,
        error: action.payload
      }
    case ADD_STOCK:
      return {
        ...state,
        stocks: [{
          ...action.payload,
          stockTrend: 0,
          current: true
        },
        ...state.stocks
        ]
      }
    case UPDATE_STOCK:
      //if state already has a stock value for that symbol, updates price
      return {
        ...state,
        stocks: state.stocks.map((stock) => {
          let stockTrend = action.payload.price - stock.price;
          console.log(stockTrend);

          if (stock.symbol === action.payload.symbol) {
            return {
              ...stock,
              price: action.payload.price,
              current: true,
              stockTrend
            }
          }
          return {
            ...stock,
            current: false
          };
        })
      };
    case REMOVE_STOCK:
      return {
        ...state,
        // eslint-disable-next-line
        stocks: state.stocks.filter((stock) => {
          if (stock._id !== action.id) {
            return stock
          }
        })
      }
    default:
      return state;
  }
};

export default stockApp;