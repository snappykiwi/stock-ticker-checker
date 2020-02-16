import React, { useState } from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css';

const Searchbar = () => {


  const [searchTerm, changeSearch] = useState("");

  const enter = (event) => {
    event.persist();
    if (event.which === 13) {
      console.log(searchTerm);
    }
  }


  return (

    <Row className="searchRow">
      <Col className="search" s={12} m={8} l={6} offset="l3 m2">
        <TextInput value={searchTerm} onChange={event => { changeSearch(event.target.value) }} onKeyPress={enter} s={12} m={8}></TextInput>
        <Button onClick={() => console.log(searchTerm)} className="blue" small={true}>Search</Button>
      </Col>
    </Row>
  )

}

export default Searchbar;