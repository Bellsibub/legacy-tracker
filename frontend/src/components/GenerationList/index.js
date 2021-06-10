import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// material ui
import { Typography } from '@material-ui/core';

// core components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import Table from 'components/Table';

// styles
// import styling from './style';

// const useStyles = makeStyles(styling);

export default ({ items, generation }) => {
  // const classes = useStyles();

  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">{`Generation ${generation}`}</Typography>
      </CardHeader>
      <CardBody>
        <Table cellData={items} />
      </CardBody>
    </Card>
  );
};
