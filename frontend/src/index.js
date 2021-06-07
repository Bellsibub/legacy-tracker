import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import HomeLayout from 'pages/Home';

import { colorPalette } from 'assets/jss/globals'

const theme = createMuiTheme({
  palette: { ...colorPalette }
})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Switch>
        <Route path="/" component={HomeLayout} />
      </Switch>
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
);
