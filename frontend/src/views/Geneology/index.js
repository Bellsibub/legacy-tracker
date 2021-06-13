/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Fab, Grid, Typography, Box } from '@material-ui/core';

import { Plus } from 'mdi-material-ui';

import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Table from 'components/Table';
import GenerationList from 'components/GenerationList';
import DialogSims from 'components/DialogSims';
// services
import { getLegacy } from 'store/legacy/services'
// actions
import { addNewSim, addNewGeneration } from 'store/legacy';

export default () => {
  const dispatch = useDispatch();
  const { legacyID } = useSelector((store) => store.session)
  const generations = useSelector(
    (store) => _.groupBy(store.legacy.sims, 'generation')
  );

  // React.useEffect(() => {
  //   if (legacyID && !generations) {
  //     dispatch(getLegacy(legacyID));
  //   }
  // }, []);

  const handleNewSimConfirm = (newSim) => {
    const nextGen = _.size(generations) + 1
    console.log(nextGen);
    dispatch(addNewGeneration({ generation: nextGen }));
    dispatch(addNewSim({ generation: nextGen, newSim }));
  };

  return (
    <>
      {/* Add new gen button */}
      <Grid container justify="flex-end">
        <DialogSims
          title="Create your first sim in this generation!"
          buttonText="Start new generation"
          newGen
          onConfirm={handleNewSimConfirm} />
      </Grid>
      <Grid container spacing={3}>
        {/* Ruler */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Ruler />
        </Grid>
        {/* Heir */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Heir />
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        {/* Generations */}
        <Grid item lg={8} xs={12}>
          {_.map(generations, (generation, key) => (
            <GenerationList key={key} items={generation} generation={key} />
          ))}
          {/* <Generations /> */}
        </Grid>
      </Grid>
    </>
  );
};
