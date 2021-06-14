import React from 'react';
// import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/core components
import TableCell from '@material-ui/core/TableCell';

import DialogSims from 'components/DialogSims';

// services
import { updateSim } from 'store/legacy/services';

import styles from '../style';

const useStyles = makeStyles(styles);

export default ({ item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.legacy);

  const handleEditSimConfirm = (newSim) => {
    console.log('NEW sim to update', newSim);
    dispatch(updateSim({ simData: newSim, legacyID: _id }));
  };

  return (
    <>
      <TableCell className={classes.tableCellButton}>
        <DialogSims
          buttonIcon
          title={`Edit ${item.firstName} ${item.lastName}`}
          onConfirm={handleEditSimConfirm}
          currentItem={item} />
      </TableCell>
    </>
  );
};
