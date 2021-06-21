import React from 'react';
// import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

import { makeStyles } from '@material-ui/core/styles';

// @material-ui/core components
import TableCell from '@material-ui/core/TableCell';

import DialogSims from 'components/DialogSims';

// services
import { updateSim, deleteSim } from 'store/legacy/services';

import DialogConfirm from 'components/DialogConfirm';
import { Delete } from 'mdi-material-ui';
import styles from '../style';

const useStyles = makeStyles(styles);

export default ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

  const { _id } = useSelector((store) => store.legacy);

  const handleEditSimConfirm = (newSim) => {
    console.log('NEW sim to update', item);
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateSim({ simData: newSim, legacyID: _id, token }));
      })
      .catch((err) => console.log(err))
  };
  const handleDeleteSimConfirm = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(deleteSim({ simID: item._id, legacyID: _id, token }));
      })
      .catch((err) => console.log(err))
  };

  return (
    <>
      <TableCell className={classes.tableCellButton}>
        <DialogSims
          buttonIcon
          title={`Edit ${item.firstName} ${item.lastName}`}
          onConfirm={handleEditSimConfirm}
          currentItem={item} />
        <DialogConfirm
          buttonIcon
          icon={Delete}
          title="Are you sure you want to delete this sim?"
          message="⚠️This can't de undone!⚠️"
          onConfirm={handleDeleteSimConfirm}
          currentItem={item} />
      </TableCell>
    </>
  );
};
