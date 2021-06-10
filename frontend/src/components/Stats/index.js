import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';

// material ui
import { Typography } from '@material-ui/core';
import { StackOverflow, Medal, Percent } from 'mdi-material-ui';

// core components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';

// Styles
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
      <CardHeader color="accent" icon={data.icon}>
        <Typography variant="subtitle2">{data.title}</Typography>
        <Typography variant="h2">
          {value} <small>{data.accent}</small>
        </Typography>
      </CardHeader>
    </Card>
  );
};
