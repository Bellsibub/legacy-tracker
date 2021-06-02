import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeLayout from 'pages/Home';

ReactDOM.render(
  <BrowserRouter>
    <CssBaseline />
    <Switch>
      <Route path="/" component={HomeLayout} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);
