import React from 'react';
import { Chart } from 'react-google-charts';


const stockChart = ({ chartData: { symbol, price, pastStats } }) => {

  const data = [
    ["Time", "Price"],
  ];

  pastStats.forEach(stock => {
    let stockData = [stock.time, stock.price];

    data.push(stockData);
  });


  const options = {
    hAxis: {
      title: 'Time',
    },
    vAxis: {
      title: 'Price',
    },
    title: `Price of ${symbol} Over Time`,
    legend: { position: "bottom" },

  };


  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={options}
      width="80%"
      height="200px"
    />
  );

}

export default stockChart;