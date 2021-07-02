import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

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
import { createSim, updateHeirs, getLegacy } from 'store/legacy/services';
import { filterRunningSims } from 'utils/calculations';

export default ({ items, gen, roles }) => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { _id, generation } = useSelector((store) => store.legacy);

  const handleNewLegacyChild = (newSim) => {
    getAccessTokenSilently().then((token) => {
      dispatch(createSim({ simData: newSim, legacyID: _id, token })).then(() => {
        dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
          const simsRunning = filterRunningSims(updatedLegacy, generation);
          dispatch(updateHeirs({ simsRunning, legacyID: _id, token, newSim: true }));
        });
      });
    });
  };
  const handleNewSimConfirm = (newSim) => {
    getAccessTokenSilently().then((token) => {
      dispatch(createSim({ simData: newSim, legacyID: _id, token })).then(() => {
        dispatch(getLegacy({ legacyID: _id, token }));
      });
    });
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
            onConfirm={handleNewLegacyChild} />
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
