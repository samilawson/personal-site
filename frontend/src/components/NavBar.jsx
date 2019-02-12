import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
const NavBar = () => (
  <div>
    <Navbar color="dark" light expand="md">
      <NavbarBrand href="/">lastfmdash</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/projects">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  </div>
);

export default NavBar;
