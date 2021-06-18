import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd-party components
import { ButtonBase, Icon, Menu, MenuItem } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import { AlertBoxOutline } from 'mdi-material-ui';

// custom components
import DialogSelectSim from 'components/DialogSelectSim';
// services
import { updatePacks, completeCategoryItem } from 'store/legacy/services';
import { updateUserMetadata } from 'store/session/services';
// styling
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ category, item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

  // const [action, setAction] = React.useState('');
  // const [dialog, setDialog] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { _id } = useSelector((store) => store.legacy);

  const imageClasses = classNames({
    [classes.image]: true,
    [classes.focused]: item.active
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (actionType) => {
    handleClose();

    switch (actionType) {
      case 'removeactive':
        getAccessTokenSilently()
          .then((token) => {
            dispatch(
              updatePacks({
                packID: item._id,
                legacyID: _id,
                value: false,
                token
              })
            );
          })
          .catch((err) => console.log(err))

        break;
      case 'setactive':
        getAccessTokenSilently()
          .then((token) => {
            dispatch(
              updatePacks({
                packID: item._id,
                legacyID: _id,
                value: true,
                token
              })
            );
          })
          .catch((err) => console.log(err))
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={classes.root}>
        <ButtonBase focusRipple className={imageClasses} onClick={handleClick}>
          <img src={item.image} alt={item.name} />
          <span className={classes.imageBackdrop} />
          {item.active && (
            <span className={classes.imageFocused}>
              <Icon>
                <AlertBoxOutline />
              </Icon>
            </span>
          )}
        </ButtonBase>
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          {item.active ? (
            <MenuItem onClick={() => handleSelect('removeactive', false)}>
              Remove as Active
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleSelect('setactive', true)}>
              Set as Active
            </MenuItem>
          )}
        </Menu>
      </div>
    </>
  );
};
