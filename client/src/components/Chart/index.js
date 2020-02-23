import React from 'react';
import { Chart } from 'react-google-charts';
import * as moment from 'moment';


const stockChart = ({ chartData: { symbol, pastStats } }) => {

  const data = [
    ["Time", "Price"],
  ];

  pastStats.forEach(stock => {
    let time = moment(stock.time).format('lll');
    let stockData = [time, stock.price];

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