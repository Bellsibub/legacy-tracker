/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import {
  TextField,
  Checkbox
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange }) => {
  const classes = useStyles();
  const { aspirations } = useSelector((store) => store.legacy)

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="aspirations"
      name="aspirations"
      value={value || []}
      onChange={onChange}
      getOptionSelected={(option, val) => option._id === val._id}
      multiple
      disableCloseOnSelect
      filterSelectedOptions
      options={aspirations}
      groupBy={(option) => {
        return option.type.toUpperCase();
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox checked={selected} />
          {option.name}
        </>
      )}
      renderInput={(params) => <TextField {...params} label="Aspirations" />} />
  )
}