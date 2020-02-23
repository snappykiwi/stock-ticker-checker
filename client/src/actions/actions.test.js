import * as actions from './index';
import { ADD_STOCK, GET_STOCKS, STOCKS_ERROR, UPDATE_STOCK, REMOVE_STOCK } from './types';

describe('expected results for actions', () => {

  it('should create an action to add a stock', () => {
    const mockStock = {
      symbol: "AA",
      price: "2.12",
      time: 1582318797546
    }
    const expectedAction = {
      type: ADD_STOCK,
      payload: mockStock
    }
    expect(actions.addStock(mockStock)).toEqual(expectedAction);
  });

  it('should create an action to update a stock', () => {
    const mockStock = {
      symbol: "AA",
      price: "2.12",
      time: 1582318797546
    }
    const expectedAction = {
      type: UPDATE_STOCK,
      payload: mockStock
    }
    expect(actions.updateStock(mockStock)).toEqual(expectedAction);
  });

  it('should create an action for getting stocks', () => {


  })
});