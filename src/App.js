import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Speedcubing from './components/Speedcubing';
import Contact from './components/Contact';
import Error from './components/Error';

function App() {
  return (
    <div className="AppContainer">
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/speedcubing" component={Speedcubing} />
        <Route path="/contact" component={Contact} />
        <Route component={Error} />
      </Switch>
    </main> 
    </div>
  );
}

export default App;
