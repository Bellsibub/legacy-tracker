import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid, Container } from '@material-ui/core';
// custom components
import Goals from 'components/Goals';
import Stats from 'components/Stats';

export default () => {
  const { score, goals } = useSelector((store) => store.legacy);

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} justify="center">
        <Grid item lg={4} md={4} sm={5} xs={9}>
          <Stats value={score.food.score || 0} type="score" />
        </Grid>
        <Grid item lg md sm={9} xs={12}>
          <Goals category="food" data={goals.food} />
        </Grid>
      </Grid>
    </Container>
  );
};
