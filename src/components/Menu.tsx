import React, { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
//import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.scss';
import { Link } from 'react-router-dom';

interface Props {
  mode: 'light' | 'dark';
  absolute?: boolean;
}

interface State {
  isOpen: boolean;
}

export default function Menu(props: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="MenuContainer"
      style={{
        position: props.absolute ? 'absolute' : 'relative',
        zIndex: 9999,
      }}
    >
      <Navbar expand="md">
        <Link to="/">
          <img
            alt="logo"
            src={
              props.mode === 'light'
                ? '/logos/je-logo-white.png'
                : '/logos/je-logo.png'
            }
            style={{ height: '80px', marginRight: '2vw' }}
          ></img>
        </Link>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => setIsOpen(!isOpen)}
            width={24}
            height={16}
            strokeWidth={2}
            borderRadius={45}
            color={props.mode === 'light' ? 'white' : 'black'}
          />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            {/*<NavLink className="navlink-custom" href="/projects"><CodeIcon style={{ marginRight: "5px", marginBottom: "2px" }} /><span className="Underline">Projects</span></NavLink>*/}
            <Link
              className={
                props.mode === 'light'
                  ? 'navlink-custom white-link'
                  : 'navlink-custom'
              }
              to="/speedcubing"
            >
              <AppsIcon style={{ marginRight: '5px', marginBottom: '2px' }} />
              <span
                className={props.mode === 'light' ? 'Underline2' : 'Underline'}
              >
                Speedcubing
              </span>
            </Link>
            <Link
              className={
                props.mode === 'light'
                  ? 'navlink-custom white-link'
                  : 'navlink-custom'
              }
              to="/contact"
            >
              <EmailIcon style={{ marginRight: '5px', marginBottom: '2px' }} />
              <span
                className={props.mode === 'light' ? 'Underline2' : 'Underline'}
              >
                Contact
              </span>
            </Link>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
