import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.css';

export default class Menu extends React.Component {

  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = { isOpen: false };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="MenuContainer">
        <Navbar light expand="md">
        <NavbarBrand href="/"><img src="/mylogo.png" style={{height: "80px", marginRight: "0.5vw", marginLeft: "3vw", marginTop: "2.5vw", marginBottom: "2.5vw"}}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle.bind(this)} width={24} height={16} strokeWidth={2} borderRadius={45} color="black"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>  
            <Nav navbar>
            <NavItem>
              <NavLink href="/speedcubing">Speedcubing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact">Contact</NavLink>
            </NavItem>            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}