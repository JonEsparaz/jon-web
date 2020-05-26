import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import './Menu.scss';

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
        <NavbarBrand href="/"><img alt="logo" src="/mylogo.png" style={{height: "80px", marginRight: "0.5vw"}}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle.bind(this)} width={24} height={16} strokeWidth={2} borderRadius={45} color="black"/>
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/speedcubing"><AppsIcon style={{marginRight: "5px", marginBottom: "2px"}}/>Speedcubing</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/projects"><CodeIcon style={{marginRight: "5px", marginBottom: "2px"}}/>Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact"><EmailIcon style={{marginRight: "5px", marginBottom: "2px"}}/>Contact</NavLink>
            </NavItem>            
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}