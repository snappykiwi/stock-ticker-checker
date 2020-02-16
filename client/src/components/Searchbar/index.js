import React from 'react';
import { Row, Col, TextInput, Button } from 'react-materialize';
import './styles.css';

const Searchbar = () => {
  return (

    <Row className="searchRow">
      <Col className="search" s={12} m={8} l={6} offset="l3 m2">
        <TextInput s={12} m={8}></TextInput>
        <Button className="blue" small={true}>Search</Button>
      </Col>
    </Row>
  )

}

export default Searchbar;