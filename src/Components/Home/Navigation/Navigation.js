import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
<<<<<<< HEAD
    return (
        <div>
            <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home">Sajid</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link as={Link} to="/home">Home</Nav.Link>
      <Nav.Link as={Link} to="/about">About me</Nav.Link>
      <Nav.Link as={Link} to="/work">Projects</Nav.Link>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      <Nav.Link as={Link} to="/contact">Contact me</Nav.Link>
      <a href='https://drive.google.com/uc?export=download&id=1nCi97opCJlF_s-GphNvO0RB3gCXewvzb' download>
      <button className="btn btn-primary">My Resume</button>
      </a>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>
    );
=======
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home" className="ml-5 mt-3 mb-3"><h1>SAJID</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto mr-5 mt-3 mb-3">
            <Nav.Link as={Link} to="/home" className='mr-3'>Home</Nav.Link>
            <Nav.Link as={Link} to="/work" className='mr-3'>Projects</Nav.Link>
            <Nav.Link as={Link} to="/blog" className='mr-3'>Blog</Nav.Link>
            <Nav.Link as={Link} to="/about" className='mr-3'>About me</Nav.Link>
            <Nav.Link as={Link} to="/contact" className='mr-3'>Contact me</Nav.Link>
            <a href='https://drive.google.com/file/d/1yObyavH4cE1QkBHIkh4uh0hH3mXRqHv0/view?usp=sharing' target='_blank' download>
              <button className="btn btn-primary">My Resume</button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
>>>>>>> dbc76c9e209f23fdda876ebe47449c45315b6f56
};

export default Navigation;