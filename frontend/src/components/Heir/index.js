import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// 3rd party components
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { ArrowUpCircleOutline, Podium } from 'mdi-material-ui';

// core components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import DialogConfirm from 'components/DialogConfirm';

// services
import { updateLegacy, getLegacy, updateHeirs } from 'store/legacy/services';
// utils
import { filterRunningSims } from 'utils/calculations';

const PotentialHeir = ({ item, onClick }) => {
  const { heir } = useSelector((store) => store.legacy.laws);
  const handleClick = () => {
    onClick(item);
  };
  return (
    <>
      <ListItem key={item.id}>
        <ListItemIcon>
          <DialogConfirm
            icon={ArrowUpCircleOutline}
            title="Select this sim as heir"
            message={heir.helpText || ''}
            subTitle={`The current heir law is: ${heir.title}`}
            onConfirm={handleClick} />
        </ListItemIcon>
        <ListItemText primary={`${item.firstName} ${item.lastName}`} />
      </ListItem>
      <Divider variant="middle" />
    </>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const { heir, potentialHeirs, _id, generation, laws } = useSelector(
    (store) => store.legacy
  );

  const handleHeirChange = (newHeir) => {
    getAccessTokenSilently().then((token) => {
      dispatch(
        updateLegacy({ newData: { heir: newHeir._id }, legacyID: _id, token })
      ).then(() => {
        dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
          const simsRunning = filterRunningSims(updatedLegacy, generation);
          dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
        });
      });
    });
  };

  return (
    <Card>
      <CardHeader color="accent" icon={Podium}>
        <Typography variant="subtitle2">HEIR</Typography>
        {heir ? (
          <Typography variant="h2">{`${heir.firstName} ${heir.lastName}`}</Typography>
        ) : (
          <Typography variant="caption" component="p">
            {laws.heir.auto
              ? 'No potential heirs found that match your laws'
              : 'No current heir selected'}
          </Typography>
        )}
      </CardHeader>
      {!laws.heir.auto && (
        <>
          <Divider variant="middle" />
          <CardBody>
            <Typography variant="subtitle2">POTENTIAL HEIRS</Typography>
            {_.size(potentialHeirs) !== 0 ? (
              <List>
                {_.map(potentialHeirs, (item) => (
                  <PotentialHeir key={item._id} item={item} onClick={handleHeirChange} />
                ))}
              </List>
            ) : (
              <Typography variant="caption" component="p">
                No potential heirs found that match your laws
              </Typography>
            )}
          </CardBody>
        </>
      )}
    </Card>
  );
};
