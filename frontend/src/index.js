import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeLayout from 'pages/Home';

import { muitheme } from 'assets/jss/theme'

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={muitheme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={HomeLayout} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
