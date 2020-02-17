import { SET_LOADING, GET_STOCKS, ADD_STOCK, STOCKS_ERROR } from './types';
import API from '../utils/API';


// GETS STOCKS FROM DB
export const getStocks = () => async dispatch => {

  try {
    setLoading();

    let dbStocks = await API.getStocks();
    let stockData = await dbStocks.data;
    console.log(stockData);

    dispatch({
      type: GET_STOCKS,
      payload: stockData
    });
  } catch (error) {
    dispatch({
      type: STOCKS_ERROR,
      payload: error.response.data
    })
  }

}

// ADDS STOCK
export const addStock = (payload) => {
  return { type: ADD_STOCK, payload };
};

// SETS LOADING
export const setLoading = () => {
  return { type: SET_LOADING }
};
