import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { AppContainer } from './components/App';
import IndexPage from './components/IndexPage';
import PunPage from './components/PunPage';
import NotFoundPage from './components/NotFoundPage';

const routes = ( <Route>
    <Route path="/" component={AppContainer} >
      <IndexRoute component={IndexPage} />
      <Route path="pun/:id" component={PunPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);

export default routes;