/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';

import Goals from 'components/Goals'
import Stats from 'components/Stats'
import IconItemsList from 'components/IconItemsList';
import { aspirations, sims } from 'utils/data'
import ItemBySimsList from 'components/ItemBySimsList';

export default () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Stats value={3} type="score" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Stats value={3} type="totalCompleted" />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Stats value={33.33} type="percentage" />
      </Grid>
      {/* Goals */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <Goals />
      </Grid>
      {/* Icon Items list */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <IconItemsList title="Aspirations" items={aspirations} splitBy="type" />
      </Grid>
      {/* Item By Sims List */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <ItemBySimsList title="Aspirations per Sim" itemsKey="aspirations" items={sims} />
      </Grid>
    </Grid>
  )
};
