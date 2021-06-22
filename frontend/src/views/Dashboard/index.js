/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import logo from 'assets/img/logo-white.svg';
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Stats from 'components/Stats';
import DialogConfirm from 'components/DialogConfirm';
import { initLegacy, deleteLegacy } from 'store/legacy/services';

import { startingSim, startingLegacySettings } from 'utils/defaultData';
import FocusTaskList from 'components/FocusTaskList';
import BigImage from 'components/BigImage';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { getAccessTokenSilently } = useAuth0();
  const { score, _id } = useSelector((store) => store.legacy);

  const handleStartNewLegacy = () => {
    history.push('/onboarding');
    if (_id) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(deleteLegacy({ legacyID: _id, token }));
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      {_id && (
        <Grid container spacing={3}>
          {/* Ruler */}
          <Grid item lg={6} md={9} sm={9} xs={12}>
            <Ruler />
          </Grid>
          {/* Heir */}
          <Grid item lg={6} md={9} sm={9} xs={12}>
            <Heir />
          </Grid>
          {/* {_.map(score, (scoreValues, key) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={key}>
              <Stats value={scoreValues.total} type="score" title={key} />
            </Grid>
          ))} */}
          <Grid item lg={6} md={9} sm={9} xs={12}>
            <FocusTaskList />
          </Grid>
        </Grid>
      )}
      {!_id && (
        <Grid
          container
          spacing={2}
          direction="column"
          justify="center"
          alignItems="center">
          <BigImage image={logo} alt="logo" />
          {/* <Typography variant="h1">🍧</Typography> */}

          <DialogConfirm
            onConfirm={handleStartNewLegacy}
            buttonText="Start new legacy"
            title="Start a new legacy?"
            message={
              _id
                ? '⚠️ Are you sure? You will loose access to your current legacy!! ⚠️'
                : 'Lets go!'
            } />
        </Grid>
      )}
    </>
  );
};
