import React from 'react';
import { Grid } from '@material-ui/core';
import Laws from 'components/Laws';
import Rules from 'components/Rules';

export default () => {
  return (
    <>
      <Grid container spacing={3}>
        {/* Laws */}
        <Grid item lg={4} xs={12}>
          <Laws />
        </Grid>
        {/* Rules */}
        <Grid item lg={8} xs={12}>
          <Rules />
        </Grid>
      </Grid>
    </>
  );
};
