/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import {
  TextField
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange }) => {
  const classes = useStyles();
  const { species } = useSelector((store) => store.session.data)

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="species"
      name="species"
      value={value || null}
      onChange={onChange}
      options={species}
      getOptionSelected={(option, val) => option._id === val._id}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => <TextField {...params} label="Species" />} />
  )
}