import React from 'react';

// 3rd party components
import { Grid, Container } from '@material-ui/core';
// custom components
import Laws from 'components/Laws';
import Rules from 'components/Rules';

export default () => {
  return (
    <Container maxWidth="md">
      <Grid container spacing={3} justify="center">
        <Grid item lg md={5} sm={5} xs={12}>
          <Laws />
        </Grid>
        <Grid item lg={8} md sm xs={12}>
          <Rules />
        </Grid>
      </Grid>
    </Container>
  );
};
