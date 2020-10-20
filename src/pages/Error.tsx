import React from 'react';
import './Error.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

export default function Error() {
  return (
    <div>
      <Menu mode="dark" />
      <div className="error">
        <h2 className="Header2 Big">Page not found</h2>
        <Link to="/" className="ActionButton2">
          Back to home
        </Link>
      </div>
      <Footer />
    </div>
  );
}
