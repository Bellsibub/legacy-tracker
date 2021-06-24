import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

// 3rd party components
import { Grid } from '@material-ui/core';

// custom components
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Stats from 'components/Stats';
import DialogConfirm from 'components/DialogConfirm';
import FocusTaskList from 'components/FocusTaskList';
import BigImage from 'components/BigImage';
// services
import { deleteLegacy } from 'store/legacy/services';
// assets
import logo from 'assets/img/logo-white.svg';

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
          <Grid item sm={6} xs={12}>
            <Ruler />
          </Grid>
          <Grid item sm={6} xs={12}>
            <Heir />
          </Grid>
          {_.map(score, (scoreValues, key) => (
            <Grid item lg={3} md={5} sm={6} xs={12} key={key}>
              <Stats value={scoreValues.score || 0} type="score" title={key} />
            </Grid>
          ))}
          <Grid item sm={6} xs={12}>
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
