import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Input
} from '@material-ui/core';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

const data = {
  gender: ['Male', 'Female']
};

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
