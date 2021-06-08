/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// import Goals from 'components/Goals'

export default () => {
  return (
    <>
      <Typography variant="overline">Laws & Rules</Typography>
      <Grid container spacing={3}>
        {/* Laws */}
        <Grid item lg={6} xs={12}>
          {/* <Laws /> */}
        </Grid>
        {/* Rules */}
        <Grid item lg={6} xs={12}>
          {/* <Rules /> */}
        </Grid>
      </Grid>
    </>
  );
};
