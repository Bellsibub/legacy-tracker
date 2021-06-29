import React from 'react';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// core components

import styles from 'assets/jss/fullPageStyles';

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h1">
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.mainPanel}>
        <div className={classes.content}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography className={classes.title} variant="h1">
                404
              </Typography>
              <Typography className={classes.subTitle} variant="h4">
                Page not found
              </Typography>
              <Typography className={classes.description} varaint="h3">
                Ooooups! Looks like you got lost.
              </Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </>
  );
};
