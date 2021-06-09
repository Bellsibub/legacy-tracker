/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Goals from 'components/Goals'
import IconItemsList from 'components/IconItemsList';
import { aspirations } from 'utils/data'

export default () => {
  return (
    <Grid container spacing={3}>
      {/* Goals */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <Goals />
      </Grid>
      {/* Icon Items list */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <IconItemsList items={aspirations} splitBy="type" />
      </Grid>
    </Grid>
  )
};
