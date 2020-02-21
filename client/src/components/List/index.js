import React, { useEffect } from 'react';
import { ProgressBar, Collapsible } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStocks } from '../../actions';
import PopoutItem from '../PopoutItem';
import 'materialize-css/dist/css/materialize.min.css';
import './styles.css'

const List = ({ stock: { stocks, loading }, getStocks }) => {

  useEffect(() => {
    getStocks()
    // eslint-disable-next-line
  }, []);


  if (loading) {
    return <ProgressBar />
  }

  return (
    <div>

      <Collapsible accordion id="stockList">

        {(!loading && !stocks.length) ?
          <h4>No Stocks Yet, Search by Ticker Symbol to Get Latest Price</h4> :

          (stocks.map(stock =>
            <PopoutItem key={stock._id} stockData={stock}></PopoutItem>))
        }
      </Collapsible>

    </div>
  )
}

List.propTypes = {
  stock: PropTypes.object.isRequired,
  getStocks: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  stock: state.stock //state.stock comes from name in rootreducer
});

export default connect(
  mapStateToProps,
  {
    getStocks
  }
)(List);