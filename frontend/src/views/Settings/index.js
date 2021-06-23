import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

// 3rd party components
import { Grid } from '@material-ui/core';
// custom components
import IconItemsList from 'components/IconItemsList';
import DialogConfirm from 'components/DialogConfirm';
// services
import { deleteLegacy } from 'store/legacy/services';
import Profile from 'components/Profile';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const { packs, _id } = useSelector((store) => store.legacy);
  const { userName } = useSelector((store) => store.session.user);

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
    isAuthenticated && (
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
    )
  );
};
