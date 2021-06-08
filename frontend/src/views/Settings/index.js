/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// import Goals from 'components/Goals'

export default () => {
  return (
    <>
      <Typography variant="overline">Settings</Typography>
      <Grid container spacing={3}>
        {/* edit profile */}
        <Grid item lg={6} xs={12}>
          {/* <edit profile /> */}
        </Grid>
        {/* legacy settings */}
        <Grid item lg={6} xs={12}>
          {/* <legacy settings /> */}
        </Grid>
        {/* games settings */}
        <Grid item xs={12}>
          {/* <games settings /> */}
        </Grid>
      </Grid>
    </>
  );
};
