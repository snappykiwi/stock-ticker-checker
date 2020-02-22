import { GET_STOCKS, ADD_STOCK, UPDATE_STOCK, REMOVE_STOCK, SET_LOADING, STOCKS_ERROR } from './types';
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

// UPDATES STOCK'S PRICE
export const updateStock = (payload) => {
  return { type: UPDATE_STOCK, payload }
};

export const removeStock = (id) => async dispatch => {
  try {
    console.log(`removing ${id}`);
    let removedStock = await API.removeStock(id);
    let removedId = await removedStock.data._id;
    console.log(removedStock);

    dispatch({
      type: REMOVE_STOCK,
      id: removedId
    })

  }
  catch (error) {
    dispatch({
      type: STOCKS_ERROR,
      payload: error
    })
  }
}

// SETS LOADING
export const setLoading = () => {
  return { type: SET_LOADING }
};
