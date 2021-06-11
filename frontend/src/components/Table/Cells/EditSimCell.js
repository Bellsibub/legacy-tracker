import React from 'react';
// import _ from 'lodash';
// import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/core components
import TableCell from '@material-ui/core/TableCell';

import DialogSims from 'components/DialogSims';

// actions
// import { addNewSim } from 'store/legacy';

import styles from '../style';

const useStyles = makeStyles(styles);

export default ({ item }) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  // const handleEditSimConfirm = (value) => {
  //   dispatch(addNewSim({ genNum: value.generation, ...value }));
  // };

  return (
    <>
      <TableCell className={classes.tableCellButton}>
        <DialogSims
          buttonIcon
          title={`Edit ${item.firstName} ${item.lastName}`}
          // onConfirm={handleEditSimConfirm}
          onConfirm={(value) => console.log(value)}
          currentItem={item} />
      </TableCell>
    </>
  );
};
