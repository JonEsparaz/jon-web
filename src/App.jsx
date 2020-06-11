import React from 'react';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home'));
const Speedcubing = React.lazy(() => import('./components/Speedcubing'));
const Contact = React.lazy(() => import('./components/Contact'));
const Projects = React.lazy(() => import('./components/Projects'));
const Error = React.lazy(() => import('./components/Error'));
const Menu = React.lazy(() => import('./components/Menu'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="AppContainer">
      <Suspense fallback={<div></div>}>
        <Menu/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/speedcubing" component={Speedcubing}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects}/>
            <Route component={Error} />
          </Switch>
        <Footer/>
      </Suspense>
    </div>
  );
}

export default App;
