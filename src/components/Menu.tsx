import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
//import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.scss';
import { EmptyProps } from '../util';

interface State {
  isOpen: boolean;
}

export default class Menu extends React.Component<EmptyProps, State> {

  constructor(props: EmptyProps) {
    super(props);
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
          <NavbarBrand href="/"><img alt="logo" src="/logos/je-logo.png" style={{ height: "80px", marginRight: "0.5vw" }}></img></NavbarBrand>
          <NavbarToggler onClick={() => this.toggle()}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={() => this.toggle()} width={24} height={16} strokeWidth={2} borderRadius={45} color="black" />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto" >
              {/*<NavLink className="navlink-custom" href="/projects"><CodeIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className="Underline">Projects</span></NavLink>*/}
              <NavLink className="navlink-custom" href="/speedcubing"><AppsIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className="Underline">Speedcubing</span></NavLink>
              <NavLink className="navlink-custom" href="/contact"><EmailIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className="Underline">Contact</span></NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}