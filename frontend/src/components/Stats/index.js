/* eslint-disable no-unused-vars */
import React from 'react';
// material ui
import { Divider, Chip, Avatar, Grid } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';
import { StackOverflow, Medal, Percent } from 'mdi-material-ui';
// import styling from './style';

// const useStyles = makeStyles(styling);

const statsInfo = {
  score: {
    title: 'SCORE',
    accent: 'points',
    icon: Medal
  },
  totalCompleted: { title: 'Total count', accent: '', icon: StackOverflow },
  percentage: { title: 'Percentage', accent: '%', icon: Percent }
};

export default ({ value, type }) => {
  // const classes = useStyles();
  const data = statsInfo[type];

  return (
    <Card>
      <CardHeader color="accent" stats icon={data.icon}>
        <p className="cardCategory">{data.title}</p>
        <h3 className="cardTitle">
          {value} <small>{data.accent}</small>
        </h3>
      </CardHeader>
    </Card>
  );
};
