import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import Goals from 'components/Goals';
import Stats from 'components/Stats';
import IconItemsList from 'components/IconItemsList';

export default () => {
  const { score, goals } = useSelector((store) => store.legacy);
  const packs = useSelector((store) => {
    return _.filter(store.legacy.packs, ['active', true]);
  });
  const skills = useSelector((store) => {
    return _.filter(store.legacy.skills, (item) => {
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
      <Grid container spacing={3} justify="center">
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.skills.score || 0} type="score" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.skills.count || 0} type="totalCompleted" />
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={3}>
          <Stats value={score.skills.percentage || 0} type="percentage" />
        </Grid>
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item lg={3} md={9} sm={9} xs={12}>
          <Goals isDynamic category="skills" data={goals.skills} />
        </Grid>
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <IconItemsList title="Skills" items={skills} splitBy="type" type="item" />
        </Grid>
      </Grid>
    </>
  );
};
