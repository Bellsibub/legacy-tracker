import React from 'react';
import ReactDOM from 'react-dom';
import { Auth0Provider } from '@auth0/auth0-react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import store from 'store';
import HomeLayout from 'pages/Home';

import { BASE_URL } from 'utils/apiConfig';
import { muitheme } from 'assets/jss/theme';

const providerConfig = {
  domain: 'legacytracker.eu.auth0.com',
  clientId: 'WkUQW6mwuCCxzLSIcDv3lBsEu5AgtsnQ',
  audience: BASE_URL,
  redirectUri: `${window.location.origin}/dashboard`,
  scope: 'read:current_user'
};

const theme = responsiveFontSizes(muitheme);

ReactDOM.render(
  <Auth0Provider {...providerConfig}>
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard" />} />
            <Route path="/" component={HomeLayout} />
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  document.getElementById('root')
);
