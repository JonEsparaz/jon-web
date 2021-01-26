import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from '@aws-amplify/api';
import { Auth } from '@aws-amplify/auth';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import awsmobile from './aws-exports';
import App from './App';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
