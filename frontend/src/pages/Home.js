/* eslint-disable global-require */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Switch, Route } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// core components
import Drawer from 'components/Drawer';
import Appbar from 'components/Appbar';

import routes from 'utils/routes';

import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);

export default () => {
  // const { ...rest } = props;
  // // states and functions
  const [mobileOpen, setMobileOpen] = React.useState(false);
  // const [miniActive, setMiniActive] = React.useState(false);
  // const [image, setImage] = React.useState(require('assets/img/sidebar-2.jpg').default);
  // const [color, setColor] = React.useState('blue');
  // const [bgColor, setBgColor] = React.useState('black');
  // // const [hasImage, setHasImage] = React.useState(true);
  // const [fixedClasses, setFixedClasses] = React.useState('dropdown');
  // const [logo, setLogo] = React.useState(require('assets/img/logo-white.svg').default);
  const logo = require('assets/img/logo-white.svg').default;
  // styles
  const classes = useStyles();
  // effect instead of componentDidMount, componentDidUpdate and componentWillUnmount

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
    <div className={classes.wrapper}>
      <Drawer
        routes={routes}
        handleDrawerToggle={handleDrawerToggle}
        open={mobileOpen}
        logo={logo} />
      <div className={classes.mainPanel}>
        <Appbar title="Goth Legacy" handleDrawerToggle={handleDrawerToggle} />
        <div className={classes.content}>
          <div className={classes.container}>
            <Switch>{getRoutes(routes)}</Switch>
          </div>
        </div>
      </div>
    </div>
  );
};
