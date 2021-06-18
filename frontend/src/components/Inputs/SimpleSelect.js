/* eslint-disable no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import { FormControl, InputLabel, Select, MenuItem, Typography, Input } from '@material-ui/core';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

// const status = ['Alive, in legacy household', 'Alive, not in legacy household', 'Dead'];

const data = {
  gender: ['Male', 'Female', 'Other']
}

export default ({ value, onChange, label }) => {
  const classes = useStyles();

  return (
    <FormControl required className={classes.dialogFullWidth}>
      <InputLabel id={label.toLowerCase()}>Gender</InputLabel>
      <Select
        labelId={label.toLowerCase()}
        name={label.toLowerCase()}
        value={value || ''}
        onChange={onChange}
        input={<Input />}>
        {data[label.toLowerCase()].map((item) => (
          <MenuItem key={item} value={item}>
            <Typography variant="body1">{item}</Typography>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
