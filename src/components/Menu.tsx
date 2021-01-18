import React, { useState } from 'react';
import AppsIcon from '@material-ui/icons/Apps';
import EmailIcon from '@material-ui/icons/Email';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './Menu.scss';

interface Props {
  mode: 'light' | 'dark';
  absolute?: boolean;
}

export default function Menu({ mode, absolute }: Props): JSX.Element {
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
          <div
            className={`hamburger hamburger--slider ${
              isOpen ? 'is-active' : ''
            } ${mode === 'light' ? 'wh-menu' : 'bl-menu'}`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
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
