import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid, Container } from '@material-ui/core';

// custom components
import Goals from 'components/Goals';
import Stats from 'components/Stats';
import IconItemsList from 'components/IconItemsList';
import ItemBySimsList from 'components/ItemBySimsList';
// utils
import { filterByPack } from 'utils/helpers';

export default () => {
  const { score, sims, goals } = useSelector((store) => store.legacy);
  const { packs } = useSelector((store) => store.legacy);
  const aspirations = useSelector((store) => {
    return filterByPack(store.legacy.aspirations, packs);
  });

  return (
    <Container maxWidth="md">
      <Grid container spacing={3} justify="center">
        <Grid item lg md={4} sm={6} xs={9}>
          <Stats value={score.aspirations.score || 0} type="score" />
        </Grid>
        <Grid item lg md={4} sm={6} xs={9}>
          <Stats value={score.aspirations.count || 0} type="totalCompleted" />
        </Grid>
        <Grid item lg md={4} sm={6} xs={9}>
          <Stats value={score.aspirations.percentage || 0} type="percentage" />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item lg={4} md={5} sm={5} xs={12}>
          <Goals isDynamic category="aspirations" data={goals.aspirations} />
          <ItemBySimsList
            title="Aspirations per Sim"
            itemsKey="aspirations"
            items={sims} />
        </Grid>
        <Grid item lg={8} md={7} sm xs={12}>
          <IconItemsList
            title="Aspirations"
            items={aspirations}
            splitBy="type"
            type="item"
            simRelated />
        </Grid>
      </Grid>
    </Container>
  );
};
