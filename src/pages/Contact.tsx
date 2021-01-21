import React, { useState } from 'react';
import * as Sentry from '@sentry/react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api';
import ReCAPTCHA from 'react-google-recaptcha';
import Page from '../components/Page';
import Button from '../components/Button';
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
    <Page mode="dark">
      <div className="container">
        <div className="mx-2">
          <Form className="col-sm-6 m-auto" onSubmit={(e) => send(e)}>
            <FormGroup className="row mb-2">
              <div className="col-6">
                <Label for="fname">First name</Label>
                <Input
                  required
                  value={emailObj.first}
                  onChange={(e) => handleChange('first', e.target.value)}
                  id="fname"
                />
              </div>
              <div className="col-6">
                <Label for="lname">Last name</Label>
                <Input
                  required
                  value={emailObj.last}
                  onChange={(e) => handleChange('last', e.target.value)}
                  id="lname"
                />
              </div>
            </FormGroup>
            <FormGroup className="mb-2">
              <Label for="email">Email</Label>
              <Input
                required
                type="email"
                value={emailObj.email}
                onChange={(e) => handleChange('email', e.target.value)}
                id="email"
              />
            </FormGroup>
            <FormGroup className="mb-2">
              <Label for="subject">Subject</Label>
              <Input
                required
                value={emailObj.subject}
                onChange={(e) => handleChange('subject', e.target.value)}
                id="subject"
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Label for="message">Message</Label>
              <Input
                required
                type="textarea"
                value={emailObj.message}
                onChange={(e) => handleChange('message', e.target.value)}
                id="message"
              />
            </FormGroup>
            <ReCAPTCHA
              sitekey={
                isLocalhost
                  ? '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'
                  : '6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK'
              }
              ref={recaptchaRef}
            />
            <Button dark type="submit" disabled={isSent} data-testid="send-btn">
              {isSent ? 'Sent' : 'Send'}
            </Button>
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
          </Form>
        </div>
      </div>
    </Page>
  );
}
