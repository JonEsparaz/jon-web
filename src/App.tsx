import React from 'react';
import { Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home'));
const Speedcubing = React.lazy(() => import('./pages/Speedcubing'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Error = React.lazy(() => import('./pages/Error'));
const Admin = React.lazy(() => import('./admin/Admin'))

function App() {
  return (
    <div className="AppContainer">
      <Suspense fallback={<div></div>}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/speedcubing" component={Speedcubing} />
          <Route path="/contact" component={Contact} />
          <Route path="/projects" component={Projects} />
          <Route path="/admin" component={Admin} />
          <Route component={Error} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
