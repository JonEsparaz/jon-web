import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Amplify from "aws-amplify";
import awsmobile from "./aws-exports";
Amplify.configure(awsmobile);

ReactDOM.render(
  <BrowserRouter basename="/build">
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);