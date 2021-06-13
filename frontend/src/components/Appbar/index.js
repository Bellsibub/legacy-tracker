import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui
import { AppBar, Toolbar, Hidden, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './style';

const useStyles = makeStyles(styles);

export default ({ handleDrawerToggle }) => {
  const classes = useStyles();
  const legacy = useSelector((store) => store.legacy);
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Hidden mdUp implementation="css">
          <IconButton edge="start" aria-label="open drawer" onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.appBarContent}>
          <Typography variant="h1">
            {legacy.name ? `${legacy.name} Legacy` : `You have no legacy`}
          </Typography>
          <Typography variant="subtitle1">
            {legacy.generation ? `Generation ${legacy.generation}` : `please start one below`}
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};
