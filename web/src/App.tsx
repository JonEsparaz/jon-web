import React, { Suspense } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';

const Home = React.lazy(() => import('./pages/Home'));
const Speedcubing = React.lazy(() => import('./pages/Speedcubing'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Error = React.lazy(() => import('./pages/Error'));

export default function App(): JSX.Element {
  return (
    <div className="AppContainer" style={{ overflowX: 'hidden' }}>
      <Suspense fallback={<div />}>
        <BrowserRouter>
          <ScrollToTop />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/speedcubing" component={Speedcubing} />
            <Route path="/contact" component={Contact} />
            <Route path="/projects" component={Projects} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}
