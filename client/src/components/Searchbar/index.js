import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addStock, updateStock } from '../../actions';
import { Row, Col, TextInput, Button } from 'react-materialize';
import M from 'materialize-css/dist/js/materialize.min.js'
import './styles.css';
import API from '../../utils/API';

const Searchbar = ({ stock: { stocks }, addStock, updateStock }) => {


  const [searchTerm, changeSearch] = useState("");
  const [invalidSearch, isInvalid] = useState(false);

  // tells which action should be taken for stock
  const addOrUpdate = (stockToAdd, action) => {
    API.addStock(stockToAdd).then(res => {
      changeSearch("");
      if (action === "add") {
        addStock(res.data);
      }
      else {
        updateStock(res.data)
      }
    }).catch(err => { console.log(err); })
  }

  // Checks to determine if stock symbol already exists and if price has changed
  const checkStock = (searchSymbol, APIRes) => {
    let found = stocks.find(({ symbol }) => symbol === searchSymbol.toUpperCase());

    if (!!found) {
      if (found.price === APIRes.price) {
        M.toast({ html: `The price of ${searchSymbol.toUpperCase()} has not changed` });
      }
      else {
        addOrUpdate(APIRes, "update");
      }
    }
    else {
      addOrUpdate(APIRes, "add");
    }

  }

  // Gets most recent price of stock from API and calls checkStock function
  const getStockPrice = (symbol) => {

    API.getStockPrice(symbol)
      .then((res) => {
        let stockInfo = res.data[0];

        if (stockInfo) {
          isInvalid(false);
          checkStock(symbol, stockInfo);
        }
        else {
          isInvalid(true);
        }

      }).catch((err) => { console.log(err); })
  };

  // submits search on enter key being pressed
  const enter = (event) => {
    event.persist();
    if (event.which === 13) {
      getStockPrice(searchTerm);
    }
  };


  return (

    <Row className="searchRow">

      <Col className="search center" s={12} m={8} l={6} offset="l3 m2">

        <TextInput s={12} name="ticker" id="searchInput" placeholder={"Ticker Symbol"} value={searchTerm} onChange={event => { changeSearch(event.target.value) }} onKeyPress={enter}></TextInput>
        {invalidSearch ? (<label className="red-text inputLabel">Invalid Ticker Symbol</label>) :
          (<label className="inputLabel">Search by ticker symbol to get latest stock price</label>)}
      </Col>

      <Col className="center">
        <Button onClick={() => getStockPrice(searchTerm)} className="cyan darken-4" small={true}>Search</Button>
      </Col>

    </Row>

  )

}

Searchbar.propTypes = {
  stock: PropTypes.object.isRequired,
  addStock: PropTypes.func.isRequired,
  updateStock: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  stock: state.stock
});

export default connect(
  mapStateToProps,
  { addStock, updateStock }
)(Searchbar);