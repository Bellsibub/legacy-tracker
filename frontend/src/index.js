/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from 'store';
import HomeLayout from 'pages/Home';
import NoMatch from 'pages/nomatch';

import { muitheme } from 'assets/jss/theme';

const providerConfig = {
  domain: 'legacytracker.eu.auth0.com',
  clientId: 'WkUQW6mwuCCxzLSIcDv3lBsEu5AgtsnQ',
  // ...(config.audience ? { audience: config.audience } : null),
  redirectUri: `${window.location.origin}/dashboard`
  // onRedirectCallback,
};

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={muitheme}>
          <CssBaseline />
          <Switch>
            <Route path="/" component={HomeLayout} />
            {/* <Route component={NoMatch} /> */}
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
