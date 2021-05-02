import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sajid</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/work">Work</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/about">About me</Nav.Link>
      <a href='https://drive.google.com/uc?export=download&id=1nCi97opCJlF_s-GphNvO0RB3gCXewvzb' download>
      <button className="btn btn-primary">My Resume</button>
      </a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
};

export default Navigation;