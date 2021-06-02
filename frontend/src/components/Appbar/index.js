import React from "react";
// nodejs library to set properties for components
// import PropTypes from "prop-types";
// import cx from "classnames";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Hidden from "@material-ui/core/Hidden";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

// material-ui icons
// import Menu from "@material-ui/icons/Menu";
// import MoreVert from "@material-ui/icons/MoreVert";
// import ViewList from "@material-ui/icons/ViewList";

// core components
// import AdminNavbarLinks from "./AdminNavbarLinks";
// import Button from "components/CustomButtons/Button.js";

import styles from "./style";

const useStyles = makeStyles(styles);

export default (props) => {
  const classes = useStyles();
  // const { color, rtlActive, brandText } = props;
  // const appBarClasses = cx({
  //   [` ${classes[color]}`]: color
  // });
  // const sidebarMinimize = `${classes.sidebarMinimize
  // } ${
  //   cx({
  //     [classes.sidebarMinimizeRTL]: rtlActive
  //   })}`;
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.container}>
        {/* <Hidden smDown implementation="css">
          <div className={sidebarMinimize}>
            {props.miniActive ? (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}>
                <ViewList className={classes.sidebarMiniIcon} />
              </Button>
            ) : (
              <Button
                justIcon
                round
                color="white"
                onClick={props.sidebarMinimize}>
                <MoreVert className={classes.sidebarMiniIcon} />
              </Button>
            )}
          </div>
        </Hidden> */}
        <Hidden mdUp implementation="css">
          <IconButton
            // className={classes.appResponsive}
            // color="transparent"
            // justIcon
            edge="start"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Hidden>
        <div className={classes.flex}>
          {/* Here we create navbar brand, based on route name */}
          <Typography variant="h4" noWrap>{props.title}</Typography>
          <Typography variant="overline" noWrap>Generation 1</Typography>
        </div>
        {/* <Hidden smDown implementation="css">
          <AdminNavbarLinks rtlActive={rtlActive} />
        </Hidden> */}
      </Toolbar>
    </AppBar>
  );
}