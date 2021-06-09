/* eslint-disable no-unused-vars */
import React from 'react';
// material ui
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  IconButton,
  ListItemText
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';
import { ArrowUp, ArrowUpCircleOutline, Crown } from 'mdi-material-ui';
// import styling from './style';

// const useStyles = makeStyles(styling);

const PotentialHeir = ({ item, onClick }) => {
  const handleClick = () => {
    onClick(item)
  }
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

export default ({ currentHeir, potentialHeirs }) => {
  // const classes = useStyles();
  const [heir, setHeir] = React.useState(currentHeir);
  const handleHeirChange = (value) => {
    setHeir(value);
  };

  return (
    <Card>
      <CardHeader color="accent" stats icon={Crown}>
        <p className="cardCategory">HEIR</p>
        {heir ? (
          <h3 className="cardTitle">{`${heir.firstName} ${heir.lastName}`}</h3>
        ) : (
          <h3 className="cardSubtitle">No current heir selected</h3>
        )}
      </CardHeader>
      {potentialHeirs && (
        <>
          <Divider variant="middle" />
          <CardBody>
            <p className="cardCategory">POTENTIAL HEIRS</p>

            <List>
              <Divider variant="middle" />
              {potentialHeirs.map((item) => (
                <PotentialHeir key={item.id} item={item} onClick={handleHeirChange} />
              ))}
            </List>
          </CardBody>
        </>
      )}
    </Card>
  );
};
