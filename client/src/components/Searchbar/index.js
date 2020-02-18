import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addStock } from '../../actions';
import { Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css';
import API from '../../utils/API';

const Searchbar = ({ addStock }) => {


  const [searchTerm, changeSearch] = useState("");
  const [invalidSearch, isInvalid] = useState(false);


  const getStockPrice = (symbol) => {

    API.getStockPrice(symbol)
      .then((res) => {
        console.log(res.data[0]);

        if (res.data[0]) {
          isInvalid(false);
          API.addStock(res.data[0])
            .then(res => {
              console.log(res.data);
              changeSearch("");
              addStock(res.data)
            })
            .catch(err => { console.log(err); });
        }
        else {
          isInvalid(true);
          console.log("not a valid stock symbol");
        }

      }).catch((err) => { console.log(err); })
  };

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
        <Button onClick={() => getStockPrice(searchTerm)} className="blue" small={true}>Search</Button>
      </Col>

    </Row>

  )

}

export default connect(
  null,
  { addStock }
)(Searchbar);