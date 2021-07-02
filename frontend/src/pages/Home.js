import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route, useHistory } from 'react-router-dom';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';

// custom components
import Drawer from 'components/Drawer';
import Appbar from 'components/Appbar';
import NoMatch from 'pages/nomatch';

import Loading from 'components/Loading';
// actions
import { setScores } from 'store/legacy';
import { setUserID } from 'store/session';
// services
import { getLegacy } from 'store/legacy/services';
import { getData, getUserMetadata } from 'store/session/services';

// utils and data
import routes from 'utils/routes';
import logo from 'assets/img/logo.svg';
// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);

export const Home = () => {
  const history = useHistory();
  const { getAccessTokenSilently, isAuthenticated, user } = useAuth0();
  const classes = useStyles();
  const dispatch = useDispatch();
  const { legacyID } = useSelector((store) => store.session);
  const { firstTime } = useSelector((store) => store.session.user);
  const { generation, fetchDone, _id } = useSelector((store) => store.legacy);
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    getAccessTokenSilently().then((token) => {
      if (isAuthenticated) {
        dispatch(setUserID(user.sub));
        dispatch(getUserMetadata({ token }));
      }
      dispatch(getData({ token }));
    });
  }, []);

  React.useEffect(() => {
    if (fetchDone) {
      dispatch(setScores());
      if (firstTime && !_id) {
        history.push('/onboarding');
      }
    }
  }, [fetchDone]);

  React.useEffect(() => {
    getAccessTokenSilently().then((token) => {
      if (legacyID) {
        dispatch(getLegacy({ legacyID, token }));
      }
    });
  }, [legacyID]);

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

export default withAuthenticationRequired(Home, {
  onRedirecting: () => {
    return <Loading line />;
  }
});
