/* eslint-disable no-unused-vars */
import React from 'react';
// material ui
import {
  Divider,
  Chip,
  Avatar,
  Grid
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';
import { Crown } from 'mdi-material-ui';
// import styling from './style';

// const useStyles = makeStyles(styling);

const ChipSection = ({ items, title }) => {
  return (
    <>
      <Divider variant="middle" />
      <CardBody>
        <p className="cardCategory">{title.toUpperCase()}</p>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={1}>
          {items.map((item) => (
            <Grid item key={item.id}>
              <Chip
                label={item.name}
                variant="outlined"
                color="primary"
                avatar={<Avatar src={item.image} />} />
            </Grid>
          ))}
        </Grid>
      </CardBody>
    </>
  );
};

export default ({ item }) => {
  // const classes = useStyles();

  return (
    <Card>
      <CardHeader color="accent" stats icon={Crown}>
        <p className="cardCategory">RULER</p>
        <h3 className="cardTitle">{`${item.firstName} ${item.lastName}`}</h3>
      </CardHeader>
      <ChipSection items={item.traits} title="traits" />
      <ChipSection items={item.aspirations} title="aspirations" />
      <CardFooter>
        <DialogSims
          buttonText
          title={`Edit ${item.firstName} ${item.lastName}`}
          currentItem={item}
          onConfirm={(value) => console.log(value)} />
      </CardFooter>
    </Card>
  );
};
