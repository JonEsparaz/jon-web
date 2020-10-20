import React from 'react';
import './Contact.scss';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import { EmptyProps } from '../util';
import { ContactQueryVariables } from '../API';
import { API } from 'aws-amplify';
import { GRAPHQL_AUTH_MODE } from '@aws-amplify/api/lib/types';
import ReCAPTCHA from 'react-google-recaptcha';
import * as query from '../graphql/queries';

interface State {
  emailObj: ContactQueryVariables;
  isSent: boolean;
}

export default class Contact extends React.Component<EmptyProps, State> {
  recaptchaRef: React.RefObject<ReCAPTCHA>;
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      emailObj: {
        email: '',
        first: '',
        last: '',
        subject: '',
        message: '',
      },
      isSent: false,
    };
    this.recaptchaRef = React.createRef();
  }

  async send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const recaptchaValue = this.recaptchaRef?.current?.getValue();

    if (recaptchaValue) {
      try {
        const input = this.state.emailObj;
        await API.graphql({
          query: query.contact,
          variables: input,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        });

        this.setState({
          emailObj: {
            email: '',
            first: '',
            last: '',
            subject: '',
            message: '',
          },
          isSent: true,
        });
      } catch (err) {
        console.error(err);
      }
    }
  }

  handleChange(field: keyof ContactQueryVariables, input: string) {
    this.setState((prevState) => ({
      emailObj: { ...prevState.emailObj, [field]: input },
    }));
  }

  render() {
    return (
      <div className="Contact">
        <Menu mode="dark" />
        <div className="ContactContainer">
          <form className="ContactForm" onSubmit={(e) => this.send(e)}>
            <div className="NameInputContainer">
              <input
                style={{ marginRight: 10 }}
                className="NameInput"
                type="text"
                placeholder="First name"
                required
                value={this.state.emailObj.first}
                onChange={(e) => this.handleChange('first', e.target.value)}
              ></input>
              <input
                className="NameInput"
                type="text"
                placeholder="Last name"
                required
                value={this.state.emailObj.last}
                onChange={(e) => this.handleChange('last', e.target.value)}
              ></input>
            </div>

            <input
              className="FormInput"
              type="email"
              placeholder="Email"
              required
              value={this.state.emailObj.email}
              onChange={(e) => this.handleChange('email', e.target.value)}
            ></input>
            <br />
            <input
              className="FormInput"
              type="text"
              placeholder="Subject"
              required
              value={this.state.emailObj.subject}
              onChange={(e) => this.handleChange('subject', e.target.value)}
            ></input>
            <br />
            <textarea
              className="MessageInput"
              placeholder="Message..."
              required
              value={this.state.emailObj.message}
              onChange={(e) => this.handleChange('message', e.target.value)}
            ></textarea>
            <br />
            <ReCAPTCHA
              sitekey="6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK"
              ref={this.recaptchaRef}
            />
            <button
              className="ActionButton2"
              type="submit"
              disabled={this.state.isSent}
            >
              <span className={this.state.isSent ? '' : 'Underline2'}>
                {this.state.isSent ? 'Sent' : 'Send'}
              </span>
            </button>
            {this.state.isSent ? (
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
}
