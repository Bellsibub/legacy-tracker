import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';

// custom components
import Goals from 'components/Goals';
import Stats from 'components/Stats';
import IconItemsList from 'components/IconItemsList';
import ItemBySimsList from 'components/ItemBySimsList';

export default () => {
  const { score, sims, goals } = useSelector((store) => store.legacy);
  const packs = useSelector((store) => {
    return _.filter(store.legacy.packs, ['active', true]);
  });
  const aspirations = useSelector((store) => {
    return _.filter(store.legacy.aspirations, (item) => {
      let st;
      _.forEach(packs, (pack) => {
        if (pack.name === item.pack) {
          st = true;
          return false;
        } else {
          st = false;
        }
      });
      return st;
    });
  });

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.aspirations.score || 0} type="score" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.aspirations.count || 0} type="totalCompleted" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.aspirations.percentage || 0} type="percentage" />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item xs>
          <Goals isDynamic category="aspirations" data={goals.aspirations} />
        </Grid>
        <Grid item xs>
          <ItemBySimsList
            title="Aspirations per Sim"
            itemsKey="aspirations"
            items={sims} />
        </Grid>
        <Grid item xl={7} md={12}>
          <IconItemsList
            title="Aspirations"
            items={aspirations}
            splitBy="type"
            type="item"
            simRelated />
        </Grid>
      </Grid>
    </>
  );
};
