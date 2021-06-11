/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch, batch } from 'react-redux';
import { Fab, Grid, Typography, Box } from '@material-ui/core';
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';

// import { legacy, sims } from 'utils/data'
import Table from 'components/Table';
import GenerationList from 'components/GenerationList';
import { Plus } from 'mdi-material-ui';
import DialogSims from 'components/DialogSims';

// actions
import { addNewSim, addNewGeneration } from 'store/legacy';

export default () => {
  const dispatch = useDispatch();
  const { ruler, heir, potentialHeirs, generations } = useSelector(
    (store) => store.legacy
  );

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
          onConfirm={handleNewSimConfirm} />
      </Grid>
      <Grid container spacing={3}>
        {/* Ruler */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Ruler item={ruler} />
        </Grid>
        {/* Heir */}
        <Grid item lg={6} md={9} sm={9} xs={12}>
          <Heir heir={heir} potentialHeirs={potentialHeirs} />
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
