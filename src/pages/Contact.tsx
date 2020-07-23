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

export default class Contact extends React.Component<EmptyProps, ContactQueryVariables> {

  recaptchaRef: React.RefObject<ReCAPTCHA>;
  constructor(props: EmptyProps) {
    super(props);
    this.state = {
      email: '',
      first: '',
      last: '',
      subject: '',
      message: '',
    }
    this.recaptchaRef = React.createRef();
  }

  async send(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const recaptchaValue = this.recaptchaRef?.current?.getValue();

    if (recaptchaValue) {
      try {
        const input = this.state
        await API.graphql({
          query: query.contact,
          variables: input,
          authMode: GRAPHQL_AUTH_MODE.API_KEY,
        });

        this.setState({
          email: '',
          first: '',
          last: '',
          subject: '',
          message: '',
        })

      } catch (err) {
        console.error(err)
      }
    }
  }

  render() {
    return (
      <div>
        <Menu />
        <div className="ContactContainer">
          <form className="ContactForm" onSubmit={(e) => this.send(e)} >
            <div className="NameInputContainer">
              <input
                style={{ marginRight: 10 }}
                className="NameInput"
                type="text"
                placeholder="First name"
                required
                value={this.state.first}
                onChange={(e) => this.setState({ first: e.target.value })}
              ></input>
              <input
                className="NameInput"
                type="text"
                placeholder="Last name"
                required
                value={this.state.last}
                onChange={(e) => this.setState({ last: e.target.value })}
              ></input>
            </div>

            <input
              className="FormInput"
              type="email"
              placeholder="Email"
              required
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            ></input>
            <br />
            <input
              className="FormInput"
              type="text"
              placeholder="Subject"
              required
              value={this.state.subject}
              onChange={(e) => this.setState({ subject: e.target.value })}
            ></input>
            <br />
            <textarea
              className="MessageInput"
              placeholder="Message..."
              required
              value={this.state.message}
              onChange={(e) => this.setState({ message: e.target.value })}
            ></textarea>
            <br />
            <ReCAPTCHA
              sitekey="6Lcq77QZAAAAAPuPm5u1lqeo-p_EyXxxLymBS-ZK"
              ref={this.recaptchaRef}
            />
            <button
              className="ActionButton2"
              type="submit"
            >
              <span className="Underline2">
                Send
              </span>
            </button>
          </form>
        </div>
        <Footer />
      </div >
    );
  }
}