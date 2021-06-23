import React from 'react';
import { useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { NavLink, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Icon,
  Hidden,
  Typography
} from '@material-ui/core';
// custom components
import Logout from 'components/Logout';
// import avatar from 'assets/img/default-avatar.png';
// styles
import styling from './style';

const useStyles = makeStyles(styling);

const DrawerWrapper = ({ className, header, links, profile }) => {
  return (
    <div className={className}>
      {header}
      {links}
      {profile}
    </div>
  );
};
const Links = ({ routes, section }) => {
  const classes = useStyles();
  const legacy = useSelector((store) => store.legacy);
  routes = routes.filter((r) => r.section === section);
  return routes.map((route) => {
    if (!legacy.generation && !route.noLegacyShow) {
      return;
    }
    if (route.isLogout) {
      return (<Logout key={route.name} route={route} />)
    } else {
      return (
        <ListItem key={route.name} className={classes.item}>
          <NavLink
            to={route.path}
            activeClassName={classes.activeLink}
            className={classes.itemLink}>
            {typeof route.icon === 'string' ? (
              <Icon className={classes.itemIcon}>{route.icon}</Icon>
            ) : (
              <route.icon className={classes.itemIcon} />
            )}
            <ListItemText
              primary={route.name}
              disableTypography
              className={classes.itemText} />
          </NavLink>
        </ListItem>
      );
    }
  });
};

export default ({ logo, routes, open, handleDrawerToggle }) => {
  const classes = useStyles();
  const { userName } = useSelector((store) => store.session.user)
  const { user } = useAuth0();

  const drawerHeader = (
    <div className={classes.logo}>
      <Link to="/dashboard" className={classes.logoNormal}>
        <img src={logo} alt="logo" className={classes.img} />
      </Link>
    </div>
  );

  const links = (
    <List className={classes.list}>
      <Links routes={routes} section="categories" />
    </List>
  );

  const profile = (
    <div className={classes.profile}>
      <div className={classes.profileHeader}>
        <div className={classes.photo}>
          <img src={user.picture} className={classes.avatarImg} alt={user.nickname} />
        </div>
        <Typography variant="body1" noWrap className={classes.profileName}>
          {userName}
        </Typography>
      </div>
      <List className={classes.list}>
        <Links routes={routes} section="profile" />
      </List>
      ;
    </div>
  );

  return (
    <>
      {/* // Small screens */}
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={open}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          classes={{ paper: classes.drawer }}>
          <DrawerWrapper
            className={classes.drawerWrapper}
            header={drawerHeader}
            links={links}
            profile={profile} />
        </Drawer>
      </Hidden>
      {/* // Big screens */}
      <Hidden smDown implementation="css">
        <Drawer
          variant="permanent"
          anchor="left"
          open
          classes={{ paper: classes.drawer }}>
          <DrawerWrapper
            className={classes.drawerWrapper}
            header={drawerHeader}
            links={links}
            profile={profile} />
        </Drawer>
      </Hidden>
    </>
  );
};
