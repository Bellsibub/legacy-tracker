import React from 'react';
// javascript plugin used to create scrollbars on windows
// import PerfectScrollbar from 'perfect-scrollbar';
import { NavLink, Link } from 'react-router-dom';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Hidden from '@material-ui/core/Hidden';

import avatar from 'assets/img/default-avatar.png';
import { Typography } from '@material-ui/core';
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

export default (props) => {
  const classes = useStyles();

  const generateLinks = (routes, section) => {
    routes = routes.filter((r) => r.section === section)
    return routes.map((route) => {
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
    });
  };

  const drawerHeader = (
    <div className={classes.logo}>
      <Link to="/" className={classes.logoNormal}>
        <img src={props.logo} alt="logo" className={classes.img} />
      </Link>
    </div>
  );

  const links = <List className={classes.list}>{generateLinks(props.routes, 'categories')}</List>;

  const profile = (
    <div className={classes.profile}>
      <div className={classes.profileHeader}>

        <div className={classes.photo}>
          <img src={avatar} className={classes.avatarImg} alt="..." />
        </div>
        <Typography variant="body1" noWrap className={classes.profileName}>Bella</Typography>
      </div>
      <List className={classes.list}>{generateLinks(props.routes, 'profile')}</List>;
    </div>
  );

  return (
    <>
      {/* // Small screens */}
      <Hidden mdUp implementation="css">
        <Drawer
          variant="temporary"
          anchor="left"
          open={props.open}
          onClose={props.handleDrawerToggle}
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
