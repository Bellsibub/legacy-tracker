/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Goals from 'components/Goals'

export default () => {
  return (
    <Grid container spacing={3}>
      {/* Goals */}
      <Grid item lg={6} xs={12}>
        <Goals />
      </Grid>
    </Grid>
  )
};
