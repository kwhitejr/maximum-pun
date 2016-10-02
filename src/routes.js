import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LayoutContainer } from './components/Layout';
import PunListContainer from './containers/PunListContainer';
import PunFormContainer from './containers/PunFormContainer';
import NotFoundPage from './components/pages/NotFoundPage';

const routes = ( <Route>
    <Route path="/" component={LayoutContainer} >
      <IndexRoute component={PunListContainer} />
      <Route path="form" component={PunFormContainer} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);

export default routes;