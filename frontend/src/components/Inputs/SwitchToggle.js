import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { FormControl, Grid, Typography, Switch } from '@material-ui/core';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange, label }) => {
  const classes = useStyles();
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
