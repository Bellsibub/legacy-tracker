import React from 'react';
import { useDispatch } from 'react-redux';

// import { makeStyles } from '@material-ui/core/styles';
// material ui
import { Typography } from '@material-ui/core';

// core components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import Table from 'components/Table';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';

// actions
import { addNewSim } from 'store/legacy';

// styles
// import styling from './style';

// const useStyles = makeStyles(styling);

export default ({ items, generation }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();

  const handleNewSimConfirm = (newSim) => {
    dispatch(addNewSim({ generation, newSim }));
  };
  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">{`Generation ${generation}`}</Typography>
      </CardHeader>
      <CardBody>
        <Table cellData={items} />
      </CardBody>
      <CardFooter>
        <DialogSims
          title="Create new Sim"
          buttonText="Add new Sim"
          onConfirm={handleNewSimConfirm} />
      </CardFooter>
    </Card>
  );
};
