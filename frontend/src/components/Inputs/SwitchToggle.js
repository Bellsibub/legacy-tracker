/* eslint-disable no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import { FormControl, Grid, Typography, Switch } from '@material-ui/core';
// import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

// const status = ['Alive, in legacy household', 'Alive, not in legacy household', 'Dead'];

export default ({ value, onChange, label }) => {
  const classes = useStyles();
  // const [val, setValue] = React.useState(value)
  // const handleChange = () => {
  //   onChange(!val)
  //   setValue(!val)
  // }
  return (
    <FormControl className={classes.dialogFullWidth}>
      <Typography component="div">
        <Grid component="label" container alignItems="center" spacing={1}>
          <Grid item>Not {label}</Grid>
          <Grid item>
            <Switch
              checked={value || false}
              onChange={onChange}
              name={label.toLowerCase()} />
          </Grid>
          <Grid item>{label}</Grid>
        </Grid>
      </Typography>
    </FormControl>
  );
};
