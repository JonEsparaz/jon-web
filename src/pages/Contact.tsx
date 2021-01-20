import React, { useState } from 'react';
import * as Sentry from '@sentry/react';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import ReCAPTCHA from 'react-google-recaptcha';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { ContactQueryVariables } from '../API';
import { contact } from '../graphql/queries';
import './Contact.scss';

export default function Contact(): JSX.Element {
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [emailObj, setEmailObj] = useState<ContactQueryVariables>({
    email: '',
    first: '',
    last: '',
    subject: '',
    message: '',
  });

  const isLocalhost = window.location.hostname === 'localhost';
  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (recaptchaValue || isLocalhost) {
      try {
        await API.graphql({
          query: contact,
          variables: emailObj,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        });

        setEmailObj({
          email: '',
          first: '',
          last: '',
          subject: '',
          message: '',
        });
        setIsSent(true);
      } catch (err) {
        Sentry.captureException(err);
        setError(true);
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
        <main>
          <form className="ContactForm" onSubmit={(e) => send(e)}>
            <div className="NameInputContainer">
              <input
                aria-label="First Name"
                style={{ marginRight: 10 }}
                className="NameInput"
                type="text"
                placeholder="First name"
                required
                value={emailObj.first}
                onChange={(e) => handleChange('first', e.target.value)}
              />
              <input
                aria-label="Last Name"
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
              sitekey={
                isLocalhost
                  ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  : '6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK'
              }
              ref={recaptchaRef}
            />
            <button
              className="ActionButton2"
              type="submit"
              disabled={isSent}
              data-testid="send-btn"
            >
              <span className={isSent ? '' : 'Underline2'}>
                {isSent ? 'Sent' : 'Send'}
              </span>
            </button>
            {isSent && (
              <span style={{ marginLeft: 12 }}>
                <img
                  data-testid="success-icon"
                  src="/svg/check_circle_outline.svg"
                  alt="message sent"
                  className="CheckIcon"
                />
              </span>
            )}
            {error && (
              <span style={{ marginLeft: 12 }}>
                <img
                  data-testid="error-icon"
                  src="/svg/error_outline.svg"
                  alt="message failed to send"
                  className="CheckIcon"
                />
              </span>
            )}
          </form>
        </main>
      </div>
      <Footer />
    </div>
  );
}
