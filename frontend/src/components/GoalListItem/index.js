import React from 'react';
import classNames from 'classnames';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { AlertCircle, AlertCircleOutline } from 'mdi-material-ui';

// services
import { toggleGoal } from 'store/legacy/services';

// styling
import styles from './style';

const useStyles = makeStyles(styles);

export default ({ item, category, isDynamic }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const { _id } = useSelector((store) => store.legacy);
  const checkedComp = item.completed;
  const checkedFocus = item.focused;

  const listItemClasses = classNames({
    [classes.completed]: checkedComp
  });

  const handleChange = (property) => {
    getAccessTokenSilently().then((token) => {
      dispatch(
        toggleGoal({
          category,
          goalID: item._id,
          legacyID: _id,
          value: property === 'completed' ? !checkedComp : !checkedFocus,
          property,
          token
        })
      );
    });
  };

  return (
    <>
      {isDynamic ? (
        <>
          <ListItem className={listItemClasses} disabled={checkedComp}>
            <ListItemText primary={item.text} className={classes.listText} />
          </ListItem>
        </>
      ) : (
        <>
          <FormControlLabel
            className={classes.focusToggle}
            control={
              <Checkbox
                checked={checkedFocus}
                onChange={() => {
                  handleChange('focused');
                }}
                icon={<AlertCircleOutline className={classes.unCheckedColor} />}
                checkedIcon={<AlertCircle className={classes.checkedColor} />} />
            } />
          <ListItem
            button
            onClick={() => {
              handleChange('completed');
            }}>
            <ListItemText primary={item.text} className={classes.listText} />
            <ListItemIcon>
              <Checkbox
                edge="end"
                onChange={() => {
                  handleChange('completed');
                }}
                checked={checkedComp} />
            </ListItemIcon>
          </ListItem>
        </>
      )}
    </>
  );
};
