/* eslint-disable no-unused-vars */
import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useAuth0 } from '@auth0/auth0-react';
import Loading from 'components/Loading';

// import Goals from 'components/Goals'

export default () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
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
          </Grid>
          {/* games settings */}
          <Grid item xs={12}>
            {/* <games settings /> */}
          </Grid>
        </Grid>
      </>
    )
  );
};
