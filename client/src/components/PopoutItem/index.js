import React from 'react';
import Chart from '../Chart';
import './styles.css'


const PopoutItem = ({ stockData }) => {
  return (

    <li className="stockListItem">
      <div onClick={() => { console.log(stockData._id) }} className="collapsible-header active"><i className="material-icons">show_chart</i>
        <span className="stockSymbol">{stockData.symbol}</span>
        <span className="stockPrice indigo-text text-darken-4 secondary-content">${stockData.price}
        </span>
      </div>
      <div className="collapsible-body center">
        <Chart chartData={stockData}></Chart>
        <span className="chartDisclaimer">This chart is based off of values of this stock when it has been actively checked and may not be fully indicative of trends</span>
      </div>
    </li>

  )


}

export default PopoutItem