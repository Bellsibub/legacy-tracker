import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange }) => {
  const classes = useStyles();
  const { causeOfDeath } = useSelector((store) => store.session.data);

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="causeOfDeath"
      name="causeOfDeath"
      value={value || null}
      onChange={onChange}
      options={causeOfDeath}
      getOptionSelected={(option, val) => option._id === val._id}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => <TextField {...params} label="Cause of Death" />} />
  );
};
