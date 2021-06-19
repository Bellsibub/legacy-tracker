/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/Loading';
import { getUserLegacies } from 'store/session/services';
import { initLegacy } from 'store/legacy/services';
import { startingSim, startingLegacySettings } from 'utils/defaultData';
import IconItemsList from 'components/IconItemsList';
import Stepper from 'components/Stepper';
import CreateNewLegacy from 'components/CreateNewLegacy';
// import Goals from 'components/Goals'

export default () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { dataFetchDone } = useSelector((store) => store.session)

  return (
    dataFetchDone && (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <CreateNewLegacy />

          </Grid>
        </Grid>
      </>
    )
  );
};
