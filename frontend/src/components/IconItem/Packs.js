import React from 'react';
import classNames from 'classnames';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd-party components
import { ButtonBase, Icon, Typography } from '@material-ui/core';
import { AlertBoxOutline } from 'mdi-material-ui';

// services
import { updatePacks } from 'store/legacy/services';
// utils
import { formatString } from 'utils/helpers';
// styling
import DialogConfirm from 'components/DialogConfirm';
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ category, item, ...other }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const [itemActive, setItemActive] = React.useState(item.active);
  const { _id } = useSelector((store) => store.legacy);

  const imageClasses = classNames({
    [classes.image]: true,
    [classes.focused]: itemActive
  });

  const handleToggle = () => {
    other.setPacks(item._id);
    setItemActive(!itemActive);
  };

  const handleConfirm = () => {
    setItemActive(!itemActive);
    getAccessTokenSilently().then((token) => {
      dispatch(
        updatePacks({
          packID: item._id,
          legacyID: _id,
          value: !itemActive,
          token
        })
      );
    });
  };

  return (
    <>
      <div className={classes.root}>
        {other.justToggle && (
          <ButtonBase focusRipple className={imageClasses} onClick={handleToggle}>
            <img src={item.image} alt={item.name} />
            {itemActive && (
              <span className={classes.imageFocused}>
                <Icon>
                  <AlertBoxOutline />
                </Icon>
              </span>
            )}
          </ButtonBase>
        )}
        {!other.justToggle && (
          <>
            <DialogConfirm
              buttonBase
              className={imageClasses}
              onConfirm={handleConfirm}
              disabled={itemActive}
              title="Are you sure you want to activate this pack?"
              message="⚠️You can't deactivate it after⚠️">
              <img src={item.image} alt={item.name} />
              {itemActive && (
                <span className={classes.imageFocused}>
                  <Icon>
                    <AlertBoxOutline />
                  </Icon>
                </span>
              )}
            </DialogConfirm>
          </>
        )}
        <Typography variant="body2">{formatString(item.name)}</Typography>
      </div>
    </>
  );
};
