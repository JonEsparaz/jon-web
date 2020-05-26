import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Speedcubing from './components/Speedcubing';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Error from './components/Error';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Admin from './admin/Admin';

function App() {
  return (
    <div className="AppContainer">
      <Menu/>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/speedcubing" component={Speedcubing}/>
        <Route path="/contact" component={Contact}/>
        <Route path="/projects" component={Projects}/>
        <Route path="/admin" component={Admin}/>
        <Route component={Error} />
      </Switch>
    <Footer/>
    </div>
  );
}

export default App;
