import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addStock } from '../../actions';
import { Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css';
import API from '../../utils/API';

const Searchbar = ({ addStock }) => {


  const [searchTerm, changeSearch] = useState("");


  const getStockPrice = (symbol) => {

    API.getStockPrice(symbol)
      .then((res) => {
        console.log(res.data[0]);

        if (res.data[0]) {
          API.addStock(res.data[0])
            .then(res => {
              console.log(res.data);
              changeSearch("");
              addStock(res.data)
            })
            .catch(err => { console.log(err); });
        }
        else {
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
      <Col className="search" s={12} m={8} l={6} offset="l3 m2">
        <TextInput value={searchTerm} onChange={event => { changeSearch(event.target.value) }} onKeyPress={enter} s={12} m={8}></TextInput>
        <Button onClick={() => getStockPrice(searchTerm)} className="blue" small={true}>Search</Button>
      </Col>
    </Row>
  )

}

export default connect(
  null,
  { addStock }
)(Searchbar);