import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import NoMatch from 'pages/nomatch';

// @material-ui

// core components
import Drawer from 'components/Drawer';
import Appbar from 'components/Appbar';
// services
import { getLegacy } from 'store/legacy/services';
import { getData } from 'store/session/services';

// utils and data
import routes from 'utils/routes';
import logo from 'assets/img/logo-white.svg';
// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { legacyID } = useSelector((store) => store.session);
  const { generation } = useSelector((store) => store.legacy);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (legacyID) {
      dispatch(getLegacy(legacyID));
    }
    dispatch(getData());
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoutes = (_routes) => {
    if (!generation) {
      _routes = _routes.filter((r) => r.noLegacyShow);
    }
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
        <Appbar handleDrawerToggle={handleDrawerToggle} />

        <div className={classes.content}>
          <Switch>
            {getRoutes(routes)}
            <Route component={NoMatch} />
          </Switch>
        </div>
      </div>
    </>
  );
};
