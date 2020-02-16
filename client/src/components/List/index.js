import React, { useState, useEffect } from 'react';
import API from '../../utils/API'

const List = () => {

  const [stocks, setStocks] = useState([]);
  const [loading, setLoading] = useState(false);

  const getStocks = async () => {
    setLoading(true);
    let dbStocks = await API.getStocks();
    let stockData = await dbStocks.data;

    setStocks(stockData);
    setLoading(false);
  }

  useEffect(() => {
    getStocks();
  }, []);


  if (loading) {
    return <h4>Loading...</h4>
  }

  return (
    <ul>
      {stocks.map(stock =>
        <li key={stock._id}>{stock.symbol} - {stock.price}</li>
      )}
    </ul>
  )

}

export default List;