/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';

import { legacy } from 'utils/data'

// import Goals from 'components/Goals'

export default () => {
  return (
    <>
      <Typography variant="overline">Geneology</Typography>
      <Grid container spacing={3}>
        {/* Ruler */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Ruler item={legacy.ruler} />
        </Grid>
        {/* Heir */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Heir heir={legacy.heir} potentialHeirs={legacy.potentialHeirs} />
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
