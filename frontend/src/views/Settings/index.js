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
// import Goals from 'components/Goals'

export default () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();
  const { packs } = useSelector((store) => store.legacy)
  const handleStartNewGen = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(initLegacy({ founder: startingSim, legacy: startingLegacySettings, token }));
      })
      .catch((err) => console.log(err))
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    isAuthenticated && (
      <>
        <Grid container spacing={3}>
          {/* edit profile */}
          <Grid item lg={6} xs={12}>
            {/* <edit profile /> */}
            <div>
              <img src={user.picture} alt={user.name} />
              <h2>{user.name}</h2>
              <p>{user.email}</p>
            </div>
          </Grid>
          {/* legacy settings */}
          <Grid item lg={6} xs={12}>
            {/* <legacy settings /> */}
            <button type="button" onClick={handleStartNewGen}>StartNewLegacy</button>
          </Grid>
          {/* games settings */}
          <Grid item sm={9} xs={12}>
            <IconItemsList title="Packs" items={packs} splitBy="type" type="pack" />
          </Grid>
        </Grid>
      </>
    )
  );
};
