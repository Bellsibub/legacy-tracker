import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import TableCell from '@material-ui/core/TableCell';
import { Delete } from 'mdi-material-ui';
// custom components
import DialogSims from 'components/DialogSims';
import DialogConfirm from 'components/DialogConfirm';

// services
import { updateSim, deleteSim, updateHeirs, getLegacy } from 'store/legacy/services';
// utils
import { filterRunningSims } from 'utils/calculations';
// styles
import styles from '../style';

const useStyles = makeStyles(styles);

export default ({ item, children }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { generation, _id } = useSelector((store) => store.legacy);

  const handleEditSimConfirm = (newSim) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateSim({ simData: newSim, legacyID: _id, token })).then(() => {
          dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
            const simsRunning = filterRunningSims(updatedLegacy, generation);
            dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
          });
        });
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteSimConfirm = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(deleteSim({ simData: item, legacyID: _id, token })).then(() => {
          dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
            const simsRunning = filterRunningSims(updatedLegacy, generation);
            dispatch(updateHeirs({ simsRunning, legacyID: _id, token, newSim: true }));
          });
        });
      })
      .catch((err) => console.log(err));
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
        {children}
      </TableCell>
    </>
  );
};
