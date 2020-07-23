import React from 'react';
import './Contact.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

function Contact() {
  return (
    <div>
      <Menu />
      <div className="ContactContainer">
        <form className="ContactForm" >
          <div className="NameInputContainer">
            <input
              style={{ marginRight: 10 }}
              className="NameInput"
              type="text"
              placeholder="First name"
              required
            ></input>
            <input
              className="NameInput"
              type="text"
              placeholder="Last name"
              required
            ></input>
          </div>

          <input
            className="FormInput"
            type="email"
            placeholder="Email"
            required
          ></input>
          <br />
          <input
            className="FormInput"
            type="text"
            placeholder="Subject"
            required
          ></input>
          <br />
          <textarea
            className="MessageInput"
            placeholder="Message..."
            required
            wrap="hard"
          ></textarea>
          <br />
          <button
            className="ActionButton2"
            type="submit"
          >
            <span className="Underline2">
              Send
            </span>
          </button>
        </form>      </div>
      <Footer />
    </div>
  );
}

export default Contact;
