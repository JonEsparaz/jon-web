import React from 'react';
import './Error.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div className="page-wrapper">
      <Menu mode="dark" />
      <div className="Error page-body">
        <h2 className="Header2 Big">
          Page not found{' '}
          <span role="img" aria-label="confused emoji">
            😕
          </span>
        </h2>
        <Link to="/" className="ActionButton2">
          <span className="Underline2">Back to home</span>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
