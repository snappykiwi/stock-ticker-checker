import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import List from '../../components/List';
import { Container } from 'react-materialize';

class Main extends Component {


  render() {
    return (
      <Container>
        <Searchbar></Searchbar>
        <List></List>
        <h1>This is the main page</h1>
        <h4>There will be more here at some point</h4>
      </Container>
    )
  };
};

export default Main;