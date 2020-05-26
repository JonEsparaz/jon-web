import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
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
        <Navbar expand="md">
          <NavbarBrand href="/"><img alt="logo" src="/white-mylogo.png" style={{height: "80px", marginRight: "0.5vw"}}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle} width={24} height={16} strokeWidth={2} borderRadius={45} color="white" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto" >
              <NavLink className="navlink-custom" href="/speedcubing"><AppsIcon style={{marginRight: "5px", marginBottom: "2px"}} />Speedcubing</NavLink>
              <NavLink className="navlink-custom" href="/projects"><CodeIcon style={{marginRight: "5px", marginBottom: "2px"}}/>Projects</NavLink>
              <NavLink className="navlink-custom" href="/contact"><EmailIcon style={{marginRight: "5px", marginBottom: "2px"}}/>Contact</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}