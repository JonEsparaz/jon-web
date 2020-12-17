import React, { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
// import CodeIcon from '@material-ui/icons/Code';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu';
import './Menu.scss';
import { NavLink, Link } from 'react-router-dom';

interface Props {
  mode: 'light' | 'dark';
  absolute?: boolean;
}

export default function Menu({ mode, absolute }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: '/speedcubing', title: 'Speedcubing', icon: <AppsIcon /> },
    { to: '/contact', title: 'Contact', icon: <EmailIcon /> },
  ];

  return (
    <div
      className="MenuContainer"
      style={{
        position: absolute ? 'absolute' : 'relative',
        zIndex: 9999,
      }}
    >
      <Navbar expand="md">
        <Link to="/">
          <img
            alt="logo"
            src={`/logos/je-logo${mode === 'light' ? '-white' : ''}.png`}
            style={{ height: '80px', marginRight: '2vw' }}
          />
        </Link>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
          <HamburgerMenu
            isOpen={isOpen}
            menuClicked={() => setIsOpen(!isOpen)}
            width={24}
            height={16}
            strokeWidth={2}
            borderRadius={45}
            color={mode === 'light' ? 'white' : 'black'}
          />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar className="mr-auto">
            {links.map((link) => {
              return (
                <NavLink
                  key={link.title}
                  className={
                    mode === 'light'
                      ? 'navlink-custom white-link'
                      : 'navlink-custom'
                  }
                  activeClassName="active-link"
                  to={link.to}
                >
                  {link.icon}
                  <span
                    className={mode === 'light' ? 'Underline2' : 'Underline'}
                  >
                    {link.title}
                  </span>
                </NavLink>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
