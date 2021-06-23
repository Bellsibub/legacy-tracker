import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import Goals from 'components/Goals';
import Stats from 'components/Stats';

export default () => {
  const { score, goals } = useSelector((store) => store.legacy);

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Stats value={score.food.score || 0} type="score" />
      </Grid>
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <Goals category="food" data={goals.food} />
      </Grid>
    </Grid>
  );
};
