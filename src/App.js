import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Speedcubing from './components/Speedcubing';
import Contact from './components/Contact';
import Error from './components/Error';
import Footer from './components/Footer';


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
    <Footer/>
    </div>
  );
}

export default App;
