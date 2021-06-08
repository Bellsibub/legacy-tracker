/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

// import Goals from 'components/Goals'

export default () => {
  return (
    <>
      <Typography variant="overline">Geneology</Typography>
      <Grid container spacing={3}>
        {/* Ruler */}
        <Grid item lg={6} xs={12}>
          {/* <Ruler /> */}
        </Grid>
        {/* Heir */}
        <Grid item lg={6} xs={12}>
          {/* <Heir /> */}
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Generations */}
        <Grid item xs={12}>
          {/* <Generations /> */}
        </Grid>
      </Grid>
    </>
  );
};
