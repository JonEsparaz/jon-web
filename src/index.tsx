import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from '@aws-amplify/core';
import awsmobile from './aws-exports';
Amplify.configure(awsmobile);

ReactDOM.render(<App />, document.getElementById('root'));
