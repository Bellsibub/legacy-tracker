/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';

import { Grid } from '@material-ui/core';

import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Stats from 'components/Stats';
import DialogConfirm from 'components/DialogConfirm';
import { initLegacy } from 'store/legacy/services';
import { startingSim, startingLegacySettings } from 'utils/defaultData';
import FocusTaskList from 'components/FocusTaskList';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export default () => {
  const dispatch = useDispatch();
  const { score, generation } = useSelector((store) => store.legacy);
  const handleStartNewGen = () => {
    dispatch(initLegacy({ founder: startingSim, legacy: startingLegacySettings }));
  };
  return (
    <>
      {generation && (
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
      {!generation && (
        <Grid container spacing={3}>
          <DialogConfirm
            title="Start new gen"
            buttonText="Start new gen"
            message="do you want to start a new gen?"
            onConfirm={handleStartNewGen} />
        </Grid>
      )}
    </>
  );
};
