import React from 'react';
import './Contact.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Menu mode='light' />
      <div className="ContactContainer">
        <div>I'm still building a contact form. Feel free to email me directly: &nbsp;<a className="ContactText" href="mailto:jon.esparaz@gmail.com"> jon.esparaz@gmail.com</a></div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
