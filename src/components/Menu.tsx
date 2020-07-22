import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, NavLink, Navbar, NavbarBrand } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.scss';

interface Props {
  mode: 'dark' | 'light'
}

interface State {
  isOpen: boolean;
}

export default class Menu extends React.Component<Props, State> {

  constructor(props: Props) {
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
    const isDarkMode = this.props.mode === "dark"
    return (
      <div className="MenuContainer">
        <Navbar expand="md">
          <NavbarBrand href="/"><img alt="logo" src={isDarkMode ? "/white-mylogo.png" : "/mylogo.png"} style={{ height: "80px", marginRight: "0.5vw" }}></img></NavbarBrand>
          <NavbarToggler onClick={this.toggle}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={this.toggle} width={24} height={16} strokeWidth={2} borderRadius={45} color={isDarkMode ? "white" : "black"} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto" >
              <NavLink className={isDarkMode ? "navlink-custom" : "navlink-custom black-text"} href="/speedcubing"><AppsIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Speedcubing</NavLink>
              <NavLink className={isDarkMode ? "navlink-custom" : "navlink-custom black-text"} href="/projects"><CodeIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Projects</NavLink>
              <NavLink className={isDarkMode ? "navlink-custom" : "navlink-custom black-text"} href="/contact"><EmailIcon style={{ marginRight: "5px", marginBottom: "2px" }} />Contact</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}