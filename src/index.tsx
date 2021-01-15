import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

ReactDOM.render(<App />, document.getElementById('root'));
