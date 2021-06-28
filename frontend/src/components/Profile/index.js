import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd-party components
import { Button, Typography } from '@material-ui/core';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import DialogConfirm from 'components/DialogConfirm';
import CardFooter from 'components/CardFooter';

// services
import { deleteLegacy } from 'store/legacy/services';
import { deleteUser, updateUserMetadata } from 'store/session/services';
import CardBody from 'components/CardBody';
import TextInput from 'components/Inputs/TextInput';

// styles
import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user, getAccessTokenSilently, logout } = useAuth0();
  const { _id } = useSelector((store) => store.legacy);
  const { userName } = useSelector((store) => store.session.user);
  const { metaDataFetchDone } = useSelector((store) => store.session);
  const [formData, setFormData] = React.useState({ userName });
  const [hasChanges, setHasChanges] = React.useState(false);

  /* --------------------------------- EFFECTS -------------------------------- */

  React.useEffect(() => {
    if (metaDataFetchDone) {
      setFormData({ userName })
    }
  }, [metaDataFetchDone]);

  React.useEffect(() => {
    if (userName !== formData.userName) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [formData]);

  /* -------------------------------- HANDLERS -------------------------------- */

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
  const handleDeleteUser = () => {
    if (user.sub) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(deleteUser({ userID: user.sub, token })).then(() => logout());
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (event) => {
    const { target } = event;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }));
  };
  const handleSubmit = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateUserMetadata({ token, newData: { ...formData } }));
      })
      .catch((err) => console.log(err));
  };

  return (
    <Card>
      <CardHeader color="accent" avatar={user.picture} avataralt={user.nickname}>
        <Typography variant="subtitle2">PROFILE</Typography>
        <Typography variant="h2">{userName}</Typography>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit}>
          {/* username */}
          <TextInput
            value={formData.userName}
            onChange={handleChange}
            label="Username"
            name="userName" />
          <Button
            className={classes.profileSubmit}
            type="submit"
            variant="contained"
            color="primary"
            disabled={!hasChanges}>
            Save changes
          </Button>
        </form>
      </CardBody>
      <CardFooter hasBorder>
        <DialogConfirm
          onConfirm={handleStartNewLegacy}
          buttonText="Start new legacy"
          title="Start a new legacy?"
          message={
            _id
              ? '⚠️ Are you sure? You will loose access to your current legacy!! ⚠️'
              : "Let's create a legacy!"
          } />
        <DialogConfirm
          onConfirm={handleDeleteUser}
          buttonText="Delete user"
          title="Delete my user"
          message="⚠️ Are you sure? Your account will be deleted! ⚠️" />
      </CardFooter>
    </Card>
  );
};
