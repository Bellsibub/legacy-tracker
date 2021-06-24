import React from 'react';
import { useSelector } from 'react-redux';
import { Grid } from '@material-ui/core';

// custom components
import CreateNewLegacy from 'components/CreateNewLegacy';

export default () => {
  const { dataFetchDone } = useSelector((store) => store.session);

  return (
    dataFetchDone && (
      <>
        <Grid container justify="center" spacing={3}>
          <Grid item lg={7} xs={12}>
            <CreateNewLegacy />
          </Grid>
        </Grid>
      </>
    )
  );
};
