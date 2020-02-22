import axios from 'axios';

export default {

  getStockPrice: (symbol) => {
    return axios.get(`https://api.iextrading.com/1.0/tops/last?symbols=${symbol}`);
  },

  getStocks: () => {
    return axios.get('api/stocks');
  },

  addStock: (stock) => {
    return axios.post('api/stocks', stock);
  },

  removeStock: (id) => {
    return axios.put(`api/stocks/${id}`)
  }
}