import React, { useEffect } from 'react';
import { ProgressBar, Collection, CollectionItem } from 'react-materialize';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addStock, getStocks } from '../../actions';

const List = ({ stock: { stocks, loading }, getStocks }) => {

  useEffect(() => {
    getStocks()
    // eslint-disable-next-line
  }, []);


  if (loading) {
    return <ProgressBar />
  }

  return (
    <Collection>
      {stocks.map(stock =>
        <CollectionItem key={stock._id}>{stock.symbol} <span className="secondary-content">${stock.price}</span></CollectionItem>
      )}
    </Collection>
  )
}

List.propTypes = {
  stock: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  stock: state.stock //state.stock comes from root reducer naming
});

export default connect(
  mapStateToProps,
  {
    getStocks,
    addStock
  }
)(List);