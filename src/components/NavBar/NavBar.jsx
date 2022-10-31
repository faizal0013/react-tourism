import { Link } from 'react-router-dom';

import { Nav, Navbar } from 'react-bootstrap';

import style from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className={`px-2 ${style.ligth_sky_color}`}>
        <Navbar.Brand as={Link} to="/">
          Tourism
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/places">
              places
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavBar;
