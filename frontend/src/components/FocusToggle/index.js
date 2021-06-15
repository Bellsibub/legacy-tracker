/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui
import {
  Checkbox,
  FormControlLabel,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { PriorityHigh, PriorityHighOutlined } from '@material-ui/icons';
// services
import { toggleGoal } from 'store/legacy/services';
import { AlertCircle, AlertCircleOutline } from 'mdi-material-ui';
import styles from './style';

const useStyles = makeStyles(styles);

export default ({ item, category, isDynamic }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.legacy);
  const checkedComp = item.completed;
  const checkedFocus = item.focused;
  // const [checkedComp, setCheckedComp] = React.useState(item.completed);
  // const [checkedFocus, setCheckedFocus] = React.useState(item.focused);

  const listItemClasses = classNames({
    [classes.completed]: checkedComp
  });

  const handleChange = (property) => {
    // if (property === 'completed') {
    //   setCheckedComp(!checkedComp);
    // } else {
    //   setCheckedFocus(!checkedFocus);
    // }
    dispatch(
      toggleGoal({
        category,
        goalID: item._id,
        legacyID: _id,
        value: property === 'completed' ? !checkedComp : !checkedFocus,
        property
      })
    );
  };

  return (
    <>
      {isDynamic ? (
        <>
          <ListItem
            className={listItemClasses}
            button
            disabled={checkedComp}
            onClick={() => {
              handleChange('focused');
            }}>
            <ListItemText primary={item.text} className={classes.listText} />
            <FormControlLabel
              label="Set as focus"
              labelPlacement="end"
              control={
                <Checkbox
                  checked={checkedFocus}
                  onChange={() => {
                    handleChange('focused');
                  }}
                  // edge={isDynamic ? 'end' : 'start'}
                  icon={<AlertCircleOutline className={classes.unCheckedColor} />}
                  checkedIcon={<AlertCircle className={classes.checkedColor} />} />
              } />
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
                // edge={isDynamic ? 'end' : 'start'}
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
