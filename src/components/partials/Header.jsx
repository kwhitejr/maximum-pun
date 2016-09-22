import React from 'react';
import { Navbar, Nav, NavDropdown, NavItem } from 'react-bootstrap';

export default React.createClass({

  render() {
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
            <NavItem eventKey={1} href="/#/summary">
              Link 1
            </NavItem>
            <NavItem eventKey={1} href="/#/summary">
              Link 2
            </NavItem>
            <NavItem eventKey={1} href="/#/summary">
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
  }
});