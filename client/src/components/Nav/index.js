import React from 'react';
import { Navbar } from 'react-materialize';

const Nav = () => {

  return (
    <Navbar
      className="cyan darken-4"
      alignLinks="left"
      brand={<span className="brand-logo">STOCKEEZ</span>}
      centerLogo
    ></Navbar>
  )

}

export default Nav;