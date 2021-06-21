/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { useSelector, useDispatch, batch } from 'react-redux';
import { Fab, Grid, Typography, Box } from '@material-ui/core';

import { Plus } from 'mdi-material-ui';

import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Table from 'components/Table';
import GenerationList from 'components/GenerationList';
import DialogSims from 'components/DialogSims';
import DialogConfirm from 'components/DialogConfirm';
// services
import { createSim, updateLegacy } from 'store/legacy/services';
// actions
import { addNewSim, addNewGeneration } from 'store/legacy';

const roles = {
  child: {
    text: 'Legacy Child',
    legacy: true,
    runningForRuler: true,
    eligible: true
  },
  partner: {
    text: 'Partner',
    legacy: true,
    runningForRuler: false,
    eligible: false
  },
  cadet: {
    text: 'Cadet',
    legacy: false,
    runningForRuler: false,
    eligible: false
  },
  ruler: {
    text: 'Ruler',
    legacy: true,
    runningForRuler: false,
    eligible: false
  }
};

export default () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const [disabled, setDisabled] = React.useState(false);
  const { _id, generation, fetchDone } = useSelector((store) => store.legacy);
  const generations = useSelector((store) => {
    return _.chain(store.legacy.sims)
      .groupBy((sim) => sim.generation)
      .map((sim, gen) => ({ gen, sims: { ...sim } }))
      .orderBy((group) => Number(group.gen), ['desc'])
      .value()
    // console.log(t)
  });

  React.useEffect(() => {
    const topGenerationList = _.head(generations)
    if (topGenerationList.gen - 1 === generation) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [fetchDone]);

  const handleNewSimConfirm = (newSim) => {
    // console.log(newSim);
    getAccessTokenSilently()
      .then((token) => {
        dispatch(createSim({ simData: newSim, legacyID: _id, token }));
      })
      .catch((err) => console.log(err));
  };
  const handleInitNewGen = () => {
    // console.log(newSim);
    getAccessTokenSilently()
      .then((token) => {
        dispatch(
          updateLegacy({ newData: { generation: generation + 1 }, legacyID: _id, token })
        );
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* Add new gen button */}
      <Grid container justify="flex-end">
        <DialogSims
          disabled={disabled}
          title="Create your first sim in this generation!"
          buttonText="Start new generation"
          newGen
          roleType={roles.child}
          generation={generation + 1}
          onConfirm={handleNewSimConfirm} />
        <DialogConfirm
          disabled={!disabled}
          title="Are you sure you want to begin the next generation? There is no going back after this!"
          buttonText="Init next gen"
          // newGen
          onConfirm={handleInitNewGen} />
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
          {_.map(generations, (gen, key) => (
            <GenerationList
              key={key}
              items={gen.sims}
              gen={parseInt(gen.gen, 10)}
              roles={roles} />
          ))}
          {/* <Generations /> */}
        </Grid>
      </Grid>
    </>
  );
};
