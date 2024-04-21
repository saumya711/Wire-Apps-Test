import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/" style={{ fontWeight: 'bold', marginLeft: 'auto', marginRight: 'auto', fontSize: '50px' }} >Modern Walk</Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Header
