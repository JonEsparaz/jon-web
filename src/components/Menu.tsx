import React from 'react';
import AppsIcon from '@material-ui/icons/Apps';
//import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.scss';
import { Link } from 'react-router-dom'

interface Props {
  mode: 'light' | 'dark';
  absolute?: boolean
}

interface State {
  isOpen: boolean;
}

export default class Menu extends React.Component<Props, State> {

  constructor(props: Props) {
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
      <div className="MenuContainer" style={{ position: this.props.absolute ? 'absolute' : 'relative', zIndex: 9999 }} >
        <Navbar expand="md">
          <Link to='/'><img alt="logo" src={this.props.mode === 'light' ? "/logos/je-logo-white.png" : "/logos/je-logo.png"} style={{ height: "80px", marginRight: "2vw" }}></img></Link>
          <NavbarToggler onClick={() => this.toggle()}>
            <HamburgerMenu isOpen={this.state.isOpen} menuClicked={() => this.toggle()} width={24} height={16} strokeWidth={2} borderRadius={45} color={this.props.mode === 'light' ? "white" : "black"} />
          </NavbarToggler>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar className="mr-auto" >
              {/*<NavLink className="navlink-custom" href="/projects"><CodeIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className="Underline">Projects</span></NavLink>*/}
              <Link className={this.props.mode === 'light' ? "navlink-custom white-link" : "navlink-custom"} to="/speedcubing"><AppsIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className={this.props.mode === 'light' ? "Underline2" : "Underline"}>Speedcubing</span></Link>
              <Link className={this.props.mode === 'light' ? "navlink-custom white-link" : "navlink-custom"} to="/contact"><EmailIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className={this.props.mode === 'light' ? "Underline2" : "Underline"}>Contact</span></Link>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}