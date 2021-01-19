import React from 'react';
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify';
import { Auth } from '@aws-amplify/auth';
import * as Sentry from '@sentry/react';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import awsmobile from './aws-exports';

Amplify.configure(awsmobile);
Auth.configure(awsmobile);

Sentry.init({
  dsn:
    'https://e25da86e62a24b489f3f8e993f864969@o433045.ingest.sentry.io/5597755',
});

ReactDOM.render(<App />, document.getElementById('root'));
