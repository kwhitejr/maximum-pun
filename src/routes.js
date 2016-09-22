import React from 'react';
import { Route, IndexRoute } from 'react-router';
import { LayoutContainer } from './components/Layout';
import IndexPage from './components/IndexPage';
import PunPage from './components/PunPage';
import { ContactFormContainer } from './components/SubmitPunForm';
import NotFoundPage from './components/NotFoundPage';

const routes = ( <Route>
    <Route path="/" component={LayoutContainer} >
      <IndexRoute component={IndexPage} />
      <Route path="form" component={ContactFormContainer} />
      <Route path="pun/:id" component={PunPage} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Route>
);

export default routes;