import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// @material-ui
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { PriorityHigh, PriorityHighOutlined } from '@material-ui/icons';

import styles from './style';

const useStyles = makeStyles(styles);

export default function FocusToggle({ checked, onChange }) {
  const classes = useStyles();

  const handleChange = (e) => {
    onChange(e.target.checked);
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
