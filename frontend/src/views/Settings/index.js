import React from 'react';
import { useSelector } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import IconItemsList from 'components/IconItemsList';
import Profile from 'components/Profile';

export default () => {
  const { packs, _id } = useSelector((store) => store.legacy);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={6} md={8} xs={12}>
          <Profile />
        </Grid>
        {_id && (
          <Grid item lg={6} md={9} xs={12}>
            <IconItemsList title="Packs" items={packs} splitBy="type" type="pack" />
          </Grid>
        )}
      </Grid>
    </>
  );
};
