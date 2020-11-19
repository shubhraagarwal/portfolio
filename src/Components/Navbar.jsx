import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import '../Styles/Navbar.css'
function NavBar() {
  return (
    <div>
    <Navbar bg="dark" expand="lg" fixed='top' className='z-ind'>
  <Navbar.Brand href="#home">Shubhra Agarwal</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav" className='Nav'>
    <Nav  className="mr-sm-2">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#skills">Skills</Nav.Link>
      <Nav.Link href="#connect">Connect</Nav.Link>
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
    </div>
  );
}

export default NavBar;