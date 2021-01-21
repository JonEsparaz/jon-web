import React, { useState } from 'react';
import { Collapse, NavbarToggler, Nav, Navbar } from 'reactstrap';
import { NavLink, Link } from 'react-router-dom';
import './Menu.scss';

export interface Props {
  mode: 'light' | 'dark';
  absolute?: boolean;
}

export default function Menu({ mode, absolute }: Props): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      to: '/speedcubing',
      title: 'Speedcubing',
      icon: `/svg/cubing-${mode === 'light' ? 'white' : 'black'}.svg`,
      alt: '',
    },
    {
      to: '/contact',
      title: 'Contact',
      icon: `/svg/email-${mode === 'light' ? 'white' : 'black'}.svg`,
      alt: '',
    },
  ];

  return (
    <div
      className="menu-container"
      style={{
        position: absolute ? 'absolute' : 'relative',
        zIndex: absolute ? 9999 : undefined,
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
                <li key={link.title}>
                  <NavLink
                    className={
                      mode === 'light'
                        ? 'navlink-custom white-link'
                        : 'navlink-custom'
                    }
                    activeClassName="active-link"
                    to={link.to}
                  >
                    <img src={link.icon} alt={link.alt} className="menu-icon" />
                    <span
                      className={
                        mode === 'light' ? 'underline-light' : 'underline-dark'
                      }
                    >
                      {link.title}
                    </span>
                  </NavLink>
                </li>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
