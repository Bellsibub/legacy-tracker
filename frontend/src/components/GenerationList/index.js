import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';
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

// services
import { createSim } from 'store/legacy/services';

// styles
// import styling from './style';

// const useStyles = makeStyles(styling);

export default ({ items, generation }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const { _id } = useSelector((store) => store.legacy);

  const handleNewSimConfirm = (newSim) => {
    // console.log(newSim);
    getAccessTokenSilently()
      .then((token) => {
        dispatch(createSim({ simData: newSim, legacyID: _id, token }));
      })
      .catch((err) => console.log(err))
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
          generation={generation}
          onConfirm={handleNewSimConfirm} />
      </CardFooter>
    </Card>
  );
};
