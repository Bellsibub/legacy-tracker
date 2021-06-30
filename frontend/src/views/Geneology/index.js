import React from 'react';
import _ from 'lodash';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

// 3rd party components
import { Container, Grid } from '@material-ui/core';

// custom components
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import GenerationList from 'components/GenerationList';
import DialogSims from 'components/DialogSims';
import DialogConfirm from 'components/DialogConfirm';

// services
import {
  createSim,
  updateLegacy,
  getLegacy,
  updateHeirs,
  updateSim
} from 'store/legacy/services';
// utils
import { filterRunningSims } from 'utils/calculations';

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
  const { getAccessTokenSilently } = useAuth0();
  const [disabled, setDisabled] = React.useState(false);
  const { _id, generation, heir, fetchDone } = useSelector((store) => store.legacy);
  const generations = useSelector((store) => {
    return _.chain(store.legacy.sims)
      .groupBy((sim) => sim.generation)
      .map((sim, gen) => ({ gen, sims: { ...sim } }))
      .orderBy((group) => Number(group.gen), ['desc'])
      .value();
  });

  React.useEffect(() => {
    const topGenerationList = _.head(generations);
    if (topGenerationList.gen - 1 === generation) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [fetchDone]);

  const handleNewSimConfirm = (newSim) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(createSim({ simData: newSim, legacyID: _id, token })).then(() => {
          dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
            const simsRunning = filterRunningSims(updatedLegacy, generation);
            dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
          });
        });
      })
      .catch((err) => console.log(err));
  };
  const handleInitNewGen = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(
          updateLegacy({
            newData: { remove: 'heir', generation: generation + 1, ruler: heir._id },
            legacyID: _id,
            token
          })
        )
          .then(() => {
            dispatch(
              updateSim({
                simData: { ...heir, role: { ...roles.ruler } },
                legacyID: _id,
                token
              })
            );
          })
          .then(() => {
            dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
              const simsRunning = filterRunningSims(updatedLegacy, generation);
              dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
            });
          });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container maxWidth="md">
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
      <Grid container spacing={3} justify="center">
        <Grid item lg md sm={9} xs={12}>
          <Ruler />
        </Grid>
        <Grid item lg={5} md={6} sm={9} xs={12}>
          <Heir />
        </Grid>
      </Grid>
      <Grid container spacing={6} justify="center">
        {_.map(generations, (gen, key) => (
          <Grid item lg={12} xs={12}>
            <GenerationList
              key={key}
              items={gen.sims}
              gen={parseInt(gen.gen, 10)}
              roles={roles} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};
