import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

const Header = () => {

    return <div>
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">Maximum Pun</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} href="/">
              Link 1
            </NavItem>
            <NavItem eventKey={2} href="/">
              Link 2
            </NavItem>
            <NavItem eventKey={3} href="/">
              Link 3
            </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem eventKey={1}>
              Sign Up
            </NavItem>
            <NavItem eventKey={2}>
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>;
};

Header.propTypes = {

};

export default Header