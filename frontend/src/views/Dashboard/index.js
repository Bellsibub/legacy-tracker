import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

// 3rd party components
import { Container, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
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
import styles from 'assets/jss/fullPageStyles';
import Loading from 'components/Loading';

const useStyles = makeStyles(styles);
export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const { getAccessTokenSilently } = useAuth0();
  const { score, _id, fetchDone } = useSelector((store) => store.legacy);

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

  if (_id) {
    return (
      <>
        <Container maxWidth="md">
          <Grid container spacing={3} justify="center">
            <Grid item lg md sm={9} xs={12}>
              <Ruler />
            </Grid>
            <Grid item lg={5} md={6} sm={9} xs={12}>
              <Heir />
            </Grid>
            <Grid item lg={8} md={8} sm={9} xs={12}>
              <FocusTaskList />
            </Grid>
          </Grid>
          <Grid container spacing={3} justify="center">
            {_.map(score, (scoreValues, key) => (
              <Grid item lg md={4} sm={6} xs={9} key={key}>
                <Stats value={scoreValues.score || 0} type="score" title={key} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </>
    )
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.textWrapper}>
        {fetchDone ? (
          <>
            <Typography className={classes.subTitle} variant="h4">
            No legacy found
            </Typography>
            <DialogConfirm
              onConfirm={handleStartNewLegacy}
              color="accent"
              buttonText="Start new legacy"
              title="Start a new legacy?"
              message={
                _id
                  ? '⚠️ Are you sure? You will loose access to your current legacy!! ⚠️'
                  : 'Lets go!'
              } />
          </>
        ) : (
          <Loading />
        )}
      </Grid>
    </>
  );
};
