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

export default ({ items, gen, roles }) => {
  // const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();
  const { _id, generation } = useSelector((store) => store.legacy);
  // console.log(items, generation)
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
        <Typography variant="h3">{`Generation ${gen}`}</Typography>
      </CardHeader>
      <CardBody>
        <Table cellData={items} />
      </CardBody>
      <CardFooter>
        {gen > generation && (
          <DialogSims
            title="Create new child"
            buttonText="Add new child"
            generation={gen}
            roleType={roles.child}
            description="This child will be added as part of the legacy. Therefore they will be calculated against your laws in the running for the position of ruler."
            onConfirm={handleNewSimConfirm} />
        )}
        <DialogSims
          title="Create new partner"
          buttonText="Add new partner"
          generation={gen}
          roleType={roles.partner}
          description="This sim will be registered as a partner in this generation. They will be available as Mother or Father for the next generation."
          onConfirm={handleNewSimConfirm} />
        <DialogSims
          title="Create new cadet"
          buttonText="Add non-legacy Sim"
          generation={gen}
          roleType={roles.cadet}
          description="This sim is a cadet. Meaning that they are not part of the legacy. They will not be calculated as an heir (and therin ruler). They will however be available as Mother, Father or Partner for legacy sims."
          onConfirm={handleNewSimConfirm} />
      </CardFooter>
    </Card>
  );
};
