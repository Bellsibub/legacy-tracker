import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
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
import { ArrowUpCircleOutline, Crown } from 'mdi-material-ui';

import { updateHeir } from 'store/legacy';
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
  const { heir, potentialHeirs } = useSelector((store) => store.legacy);

  const handleHeirChange = (newHeir) => {
    dispatch(updateHeir({ newHeir }))
  };

  return (
    <Card>
      <CardHeader color="accent" icon={Crown}>
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

            <List>
              <Divider variant="middle" />
              {_.map(potentialHeirs, (item) => (
                <PotentialHeir key={item._id} item={item} onClick={handleHeirChange} />
              ))}
            </List>
          </CardBody>
        </>
      )}
    </Card>
  );
};
