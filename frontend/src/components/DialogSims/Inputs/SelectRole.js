/* eslint-disable no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

const roles = [
  'Founder',
  'Ruler',
  'Heir',
  'Potential heir',
  'Spouse',
  'Secondary spouse',
  'Non-eligible child',
  'Cadet child',
  'Cadet spouse',
  'Spare'
];

export default ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="role"
      name="role"
      value={value || null}
      onChange={onChange}
      options={roles}
      renderInput={(params) => <TextField {...params} label="Role" required />} />
  );
};
