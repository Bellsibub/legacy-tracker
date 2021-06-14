/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { PriorityHigh, PriorityHighOutlined } from '@material-ui/icons';
// services
import { toggleGoal } from 'store/legacy/services';
import styles from './style';

const useStyles = makeStyles(styles);

export default function FocusToggle({ item, category }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.legacy);
  const [checked, setChecked] = React.useState(item.focused);

  const handleChange = () => {
    setChecked(!checked);
    dispatch(
      toggleGoal({
        category,
        goalID: item._id,
        legacyID: _id,
        value: !checked,
        property: 'focused'
      })
    );
  };

  return (
    <FormControlLabel
      control={
        <Checkbox
          checked={checked}
          onChange={handleChange}
          icon={<PriorityHighOutlined color="disabled" />}
          checkedIcon={<PriorityHigh className={classes.checkedColor} />} />
      } />
  );
}
