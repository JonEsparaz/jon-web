import React, { useState } from 'react';
import './Contact.scss';
import { graphqlOperation, API } from 'aws-amplify';
import ReCAPTCHA from 'react-google-recaptcha';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { ContactQueryVariables } from '../API';
import * as query from '../graphql/queries';

export default function Contact() {
  const [emailObj, setEmailObj] = useState<ContactQueryVariables>({
    email: '',
    first: '',
    last: '',
    subject: '',
    message: '',
  });

  const [isSent, setIsSent] = useState(false);
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (recaptchaValue) {
      try {
        await API.graphql(graphqlOperation(query.contact, emailObj));

        setEmailObj({
          email: '',
          first: '',
          last: '',
          subject: '',
          message: '',
        });
        setIsSent(true);
      } catch (err) {
        console.debug(err);
      }
    }
  };

  const handleChange = (field: keyof ContactQueryVariables, input: string) => {
    setEmailObj((prevState) => ({
      ...prevState,
      [field]: input,
    }));
  };

  return (
    <div className="page-wrapper">
      <Menu mode="dark" />
      <div className="ContactContainer center-wrapper page-body">
        <form className="ContactForm" onSubmit={(e) => send(e)}>
          <div className="NameInputContainer">
            <input
              aria-label="First name"
              style={{ marginRight: 10 }}
              className="NameInput"
              type="text"
              placeholder="First name"
              required
              value={emailObj.first}
              onChange={(e) => handleChange('first', e.target.value)}
            />
            <input
              aria-label="Last name"
              className="NameInput"
              type="text"
              placeholder="Last name"
              required
              value={emailObj.last}
              onChange={(e) => handleChange('last', e.target.value)}
            />
          </div>
          <input
            aria-label="Email Address"
            className="FormInput"
            type="email"
            placeholder="Email"
            required
            value={emailObj.email}
            onChange={(e) => handleChange('email', e.target.value)}
          />
          <br />
          <input
            aria-label="Subject Line"
            className="FormInput"
            type="text"
            placeholder="Subject"
            required
            value={emailObj.subject}
            onChange={(e) => handleChange('subject', e.target.value)}
          />
          <br />
          <textarea
            aria-label="Message"
            className="MessageInput"
            placeholder="Message..."
            required
            value={emailObj.message}
            onChange={(e) => handleChange('message', e.target.value)}
          />
          <br />
          <ReCAPTCHA
            sitekey="6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK"
            ref={recaptchaRef}
          />
          <button className="ActionButton2" type="submit" disabled={isSent}>
            <span className={isSent ? '' : 'Underline2'}>
              {isSent ? 'Sent' : 'Send'}
            </span>
          </button>
          {isSent ? (
            <span style={{ marginLeft: 12 }}>
              <img
                src="/svg/check_circle_outline.svg"
                alt=""
                className="CheckIcon"
              />
            </span>
          ) : null}
        </form>
      </div>
      <Footer />
    </div>
  );
}
