import React from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import IconItemsList from 'components/IconItemsList';
import Profile from 'components/Profile';
// services
import { deleteLegacy } from 'store/legacy/services';
import DialogConfirm from 'components/DialogConfirm';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { packs, _id } = useSelector((store) => store.legacy);

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
      <Grid container justify="flex-end">
        <DialogConfirm
          onConfirm={handleStartNewLegacy}
          buttonText="Start new legacy"
          title="Start a new legacy?"
          message={
            _id
              ? '⚠️ Are you sure? You will loose access to your current legacy!! ⚠️'
              : "Let's create a legacy!"
          } />
      </Grid>
      <Grid container spacing={3} justify="center">
        <Grid item lg={3} md={8} xs={12}>
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
