import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

// import { makeStyles } from '@material-ui/core/styles';
// material ui
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText,
  Typography
} from '@material-ui/core';

// core components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import { ArrowUpCircleOutline, Crown, Podium } from 'mdi-material-ui';

import { updateHeir } from 'store/legacy';
import { updateLegacy, getLegacy, updateHeirs } from 'store/legacy/services';
import { filterRunningSims } from 'utils/calculations';
// styles
// import styling from './style';

// const useStyles = makeStyles(styling);

const PotentialHeir = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item);
  };
  return (
    <>
      <ListItem key={item.id}>
        <ListItemIcon>
          <IconButton edge="start" onClick={handleClick}>
            <ArrowUpCircleOutline color="primary" />
          </IconButton>
        </ListItemIcon>
        <ListItemText primary={`${item.firstName} ${item.lastName}`} />
      </ListItem>
      <Divider variant="middle" />
    </>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

  const { heir, potentialHeirs, _id, generation } = useSelector((store) => store.legacy);

  const handleHeirChange = (newHeir) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(
          updateLegacy({ newData: { heir: newHeir._id }, legacyID: _id, token })
        ).then(() => {
          dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
            const simsRunning = filterRunningSims(updatedLegacy, generation);
            dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
          });
        });
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <CardHeader color="accent" icon={Podium}>
        <Typography variant="subtitle2">HEIR</Typography>
        {heir ? (
          <Typography variant="h2">{`${heir.firstName} ${heir.lastName}`}</Typography>
        ) : (
          <Typography variant="caption" component="p">
            No current heir selected
          </Typography>
        )}
      </CardHeader>
      {potentialHeirs && (
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
