import React from 'react';
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

export default ({ currentHeir, potentialHeirs }) => {
  // const classes = useStyles();
  const [heir, setHeir] = React.useState(currentHeir);
  const handleHeirChange = (value) => {
    setHeir(value);
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
