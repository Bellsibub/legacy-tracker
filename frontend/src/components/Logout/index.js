import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { ListItem, ListItemText, Icon, ListItemIcon } from '@material-ui/core';

// styles
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ route }) => {
  const classes = useStyles();
  const { logout } = useAuth0();

  return (
    <>
      <ListItem
        button
        className={classes.item}
        onClick={() => logout({ returnTo: window.location.origin })}>
        <ListItemIcon className={classes.itemLink}>
          {typeof route.icon === 'string' ? (
            <Icon className={classes.itemIcon}>{route.icon}</Icon>
          ) : (
            <route.icon className={classes.itemIcon} />
          )}
          <ListItemText
            primary={route.name}
            disableTypography
            className={classes.itemText} />
        </ListItemIcon>
      </ListItem>
    </>
  );
};
