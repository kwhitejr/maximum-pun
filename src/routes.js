import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/App';
import IndexPage from './components/IndexPage';
import PunPage from './components/PunPage';
import NotFoundPage from './components/NotFoundPage';

const routes = (
  <Route path="/" component={Layout} >
    <IndexRoute component={IndexPage} />
    <Route path="pun/:id" component={PunPage} />
    <Route path="*" component={NotFoundPage} />
  </Route>
);

export default routes;