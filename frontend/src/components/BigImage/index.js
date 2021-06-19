/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';

import { Grid, Typography } from '@material-ui/core';
import logo from 'assets/img/logo-white.svg';
import Ruler from 'components/Ruler';
import Heir from 'components/Heir';
import Stats from 'components/Stats';
import DialogConfirm from 'components/DialogConfirm';
import { initLegacy, deleteLegacy } from 'store/legacy/services';

import { startingSim, startingLegacySettings } from 'utils/defaultData';
import FocusTaskList from 'components/FocusTaskList';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: '400px'
  }
}));

export default ({ image, alt }) => {
  const classes = useStyles();
  return (
    <>
      <img src={image} alt={alt} className={classes.image} />
    </>
  );
};
