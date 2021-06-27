import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

const status = ['Alive, in legacy household', 'Alive, not in legacy household', 'Dead'];

export default ({ value, onChange }) => {
  const classes = useStyles();

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="status"
      name="status"
      value={value || status[0]}
      onChange={onChange}
      options={status}
      renderInput={(params) => <TextField {...params} label="Status" />} />
  );
};
