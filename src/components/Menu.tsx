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
      icon: `/svg/cubing-${mode}.svg`,
      alt: '',
    },
    {
      to: '/contact',
      title: 'Contact',
      icon: `/svg/email-${mode}.svg`,
      alt: '',
    },
  ];

  return (
    <div
      className={`px-4 px-sm-5 w-100 ${
        absolute ? 'position-absolute' : 'position-relative'
      }`}
      style={{
        zIndex: absolute ? 9999 : undefined,
      }}
    >
      <Navbar expand="md">
        <Link to="/">
          <img alt="logo" src={`/logos/je-logo-${mode}.png`} className="logo" />
        </Link>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)}>
          <div
            className={`hamburger hamburger--slider ${mode}-burger ${
              isOpen ? 'is-active' : ''
            }`}
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
                    className={`navlink-custom text-decoration-none text-uppercase ${
                      mode === 'light' ? 'text-white' : ''
                    }`}
                    activeClassName="active-link"
                    to={link.to}
                  >
                    <img
                      src={link.icon}
                      alt={link.alt}
                      className="menu-icon"
                      width={24}
                      height={24}
                    />
                    <span className={`underline-${mode}`}>{link.title}</span>
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
