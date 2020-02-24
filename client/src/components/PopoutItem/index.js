import React from 'react';
import { connect } from 'react-redux';
import { removeStock } from '../../actions';
import PropTypes from 'prop-types';
import { Icon, Button } from 'react-materialize'
import Chart from '../Chart';
import TrendIcon from '../TrendIcon';
import './styles.css'
import API from '../../utils/API';


const PopoutItem = ({ stockData, removeStock }) => {
  return (

    <li className={`stockListItem ${stockData.current ? "active" : ""}`}>

      <div className="collapsible-header active">
        <i className="material-icons">show_chart</i>
        <span className="stockSymbol">
          {stockData.symbol}
        </span>
        <span className="stockPrice indigo-text text-darken-4 secondary-content">
          ${stockData.price}

          <TrendIcon stockTrend={stockData.stockTrend}></TrendIcon>
        </span>
      </div>

      <div className="collapsible-body">
        <Button onClick={() => { removeStock(stockData._id, API) }}
          className="red lighten-2 removeStock right" small node="button" waves="light"
          tooltip="Remove Stock From List" tooltipOptions={{ position: 'left' }}>
          <Icon>close</Icon>
        </Button>
        <Chart chartData={stockData}></Chart>
        <p className="chartDisclaimer center">
          This chart is based off of values of this stock when it has been actively checked and may not be fully indicative of trends
        </p>
      </div>

    </li>

  )

}

PopoutItem.propTypes = {
  removeStock: PropTypes.func.isRequired
};

export default connect(null, { removeStock })(PopoutItem);