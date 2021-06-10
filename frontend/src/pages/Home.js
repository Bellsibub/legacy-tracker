import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui

// core components
import Drawer from 'components/Drawer';
import Appbar from 'components/Appbar';
// utils and data
import routes from 'utils/routes';
import logo from 'assets/img/logo-white.svg';
import { legacy } from 'utils/data';

// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);

export default () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoutes = (_routes) => {
    return _routes.map((route) => {
      if (route.auth) {
        return <Route path={route.path} component={route.component} key={route.name} />;
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <Drawer
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        logo={logo} />
      <div className={classes.mainPanel}>
        <Appbar handleDrawerToggle={handleDrawerToggle} legacy={legacy} />
        <div className={classes.content}>
          <Switch>{getRoutes(routes)}</Switch>
        </div>
      </div>
    </>
  );
};
