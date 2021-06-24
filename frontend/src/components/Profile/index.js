import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// 3rd-party components
import { Typography } from '@material-ui/core';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import DialogConfirm from 'components/DialogConfirm';
import CardFooter from 'components/CardFooter';

// services
import { deleteLegacy } from 'store/legacy/services';

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { user, getAccessTokenSilently } = useAuth0();
  const { _id } = useSelector((store) => store.legacy);

  const { userName } = useSelector((store) => store.session.user);

  const handleStartNewLegacy = () => {
    history.push('/onboarding');
    if (_id) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(deleteLegacy({ legacyID: _id, token }));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Card>
      <CardHeader color="accent" avatar={user.picture} avataralt={user.nickname}>
        <Typography variant="subtitle2">PROFILE</Typography>
        <Typography variant="h2">{userName}</Typography>
      </CardHeader>
      <CardFooter>
        <DialogConfirm
          onConfirm={handleStartNewLegacy}
          buttonText="Start new legacy"
          title="Start a new legacy?"
          message={
            _id
              ? '⚠️ Are you sure? You will loose access to your current legacy!! ⚠️'
              : 'Lets go!'
          } />
      </CardFooter>
    </Card>
  );
};
