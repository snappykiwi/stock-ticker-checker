import React, { useEffect } from 'react';
import { ProgressBar, Collection, CollectionItem, Icon } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStock, getStocks } from '../../actions';
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
    <Collection header="Stocks">

      {(!loading && !stocks.length) ?
        <CollectionItem>No Stocks Yet, Search by Ticker Symbol to Get Latest Price</CollectionItem> :

        (stocks.map(stock =>
          <CollectionItem key={stock._id}>{stock.symbol}
            <span className="secondary-content">${stock.price}
              <Icon tiny className="menu-icon">more_vert</Icon>
            </span></CollectionItem>)
        )
      }

    </Collection>
  )
}

List.propTypes = {
  stock: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  stock: state.stock //state.stock comes from name in rootreducer
});

export default connect(
  mapStateToProps,
  {
    getStocks,
    addStock
  }
)(List);