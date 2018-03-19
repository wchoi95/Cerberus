import React, { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import './Navbar.css';

class NavbarComponent extends Component {
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">Cerberus</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem href="/surveillance">
              Surveillance
            </NavItem>
            <NavDropdown title="About" id="basic-nav-dropdown">
              <MenuItem href="/about-cerberus">Cerberus</MenuItem>
              <MenuItem href="/team">The Team</MenuItem>
            </NavDropdown>
            <NavItem href="/contact">
              Contact Us
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavbarComponent;
