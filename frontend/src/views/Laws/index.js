import React from 'react';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import Laws from 'components/Laws';
import Rules from 'components/Rules';

export default () => {
  return (
    <>
      <Grid container spacing={3} justify="center">
        <Grid item lg={4} xs={12}>
          <Laws />
        </Grid>
        <Grid item lg={6} xs={12}>
          <Rules />
        </Grid>
      </Grid>
    </>
  );
};
