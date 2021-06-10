import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './style';

const useStyles = makeStyles(styles);

export default ({ handleDrawerToggle, legacy }) => {
  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp implementation="css">
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.appBarContent}>
          <Typography variant="h1">
            {`${legacy.name} Legacy`}
          </Typography>
          <Typography variant="subtitle1">
            {`Generation ${legacy.generation}`}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
