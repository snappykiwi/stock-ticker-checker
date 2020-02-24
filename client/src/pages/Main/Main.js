import React, { Component } from 'react';
import Searchbar from '../../components/Searchbar';
import List from '../../components/List';
import { Container } from 'react-materialize';
import Nav from '../../components/Nav'


class Main extends Component {


  render() {
    return (
      <>
        <Container>
          <Searchbar></Searchbar>
          <List></List>
        </Container>
      </>
    )
  };
};

export default Main;