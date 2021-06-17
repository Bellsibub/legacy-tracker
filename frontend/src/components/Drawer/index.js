import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/core components
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Icon,
  Hidden,
  Typography
} from '@material-ui/core';

import avatar from 'assets/img/default-avatar.png';
import Logout from 'components/Logout';
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
      return (<Logout route={route} />)
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
          <img src={avatar} className={classes.avatarImg} alt="..." />
        </div>
        <Typography variant="body1" noWrap className={classes.profileName}>
          Bella
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
