import React, { useState } from 'react';
import * as Sentry from '@sentry/react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { API } from 'aws-amplify';
import ReCAPTCHA from 'react-google-recaptcha';
import Page from '../components/Page';
import Button from '../components/Button';
import { ContactQueryVariables } from '../API';
import { contact } from '../graphql/queries';
import './Contact.scss';

export default function Contact(): JSX.Element {
  const isLocalhost = window.location.hostname === 'localhost';

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);
  const [emailObj, setEmailObj] = useState<ContactQueryVariables>({
    email: '',
    first: '',
    last: '',
    subject: '',
    message: '',
  });

  const recaptchaRef = React.createRef<ReCAPTCHA>();

  const send = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const recaptchaValue = recaptchaRef.current?.getValue();

    if (recaptchaValue || isLocalhost) {
      try {
        await API.graphql({
          query: contact,
          variables: emailObj,
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
        <div className="mx-1 mb-4">
          <main>
            <Form className="col-sm-6 m-auto" onSubmit={(e) => send(e)}>
              <FormGroup className="row mb-2">
                <div className="col-6">
                  <Label for="fname">First name</Label>
                  <Input
                    required
                    value={emailObj.first}
                    onChange={(e) => handleChange('first', e.target.value)}
                    id="fname"
                    className="rounded-0"
                  />
                </div>
                <div className="col-6">
                  <Label for="lname">Last name</Label>
                  <Input
                    required
                    value={emailObj.last}
                    onChange={(e) => handleChange('last', e.target.value)}
                    id="lname"
                    className="rounded-0"
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
                  className="rounded-0"
                />
              </FormGroup>
              <FormGroup className="mb-2">
                <Label for="subject">Subject</Label>
                <Input
                  required
                  value={emailObj.subject}
                  onChange={(e) => handleChange('subject', e.target.value)}
                  id="subject"
                  className="rounded-0"
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
                  className="rounded-0"
                />
              </FormGroup>
              <ReCAPTCHA
                sitekey="6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK"
                ref={recaptchaRef}
              />
              <Button dark type="submit" disabled={isSent} testId="send-btn">
                {isSent ? 'Sent' : 'Send'}
              </Button>
              {isSent && (
                <span className="ml-3">
                  <img
                    data-testid="success-icon"
                    src="/svg/check_circle_outline.svg"
                    alt="check mark: message sent"
                    className="email-status-icon"
                  />
                </span>
              )}
              {error && (
                <span className="ml-3">
                  <img
                    data-testid="error-icon"
                    src="/svg/error_outline.svg"
                    alt="error: message failed to send"
                    className="email-status-icon"
                  />
                </span>
              )}
            </Form>
          </main>
        </div>
      </div>
    </Page>
  );
}
