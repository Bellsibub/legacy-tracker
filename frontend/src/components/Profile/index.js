import React from 'react';
import _ from 'lodash';
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
import { deleteUser, updatePassword, updateUserMetadata } from 'store/session/services';
import CardBody from 'components/CardBody';
import TextInput from 'components/Inputs/TextInput';

// styles
import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { user, getAccessTokenSilently, logout } = useAuth0();
  const { _id } = useSelector((store) => store.legacy);
  const { userName } = useSelector((store) => store.session.user);
  const { metaDataFetchDone } = useSelector((store) => store.session);
  const [formData, setFormData] = React.useState({
    user_metadata: userName,
    email: user.email
  });
  const [hasChanges, setHasChanges] = React.useState(false);

  /* --------------------------------- EFFECTS -------------------------------- */

  React.useEffect(() => {
    if (metaDataFetchDone) {
      setFormData((prevState) => ({
        ...prevState,
        user_metadata: { userName }
      }));
    }
  }, [metaDataFetchDone]);

  React.useEffect(() => {
    if (userName !== formData.user_metadata.userName || user.email !== formData.email) {
      setHasChanges(true);
    } else {
      setHasChanges(false);
    }
  }, [formData]);

  /* -------------------------------- HANDLERS -------------------------------- */

  const handleDeleteUser = () => {
    if (user.sub) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(deleteUser({ userID: user.sub, token })).then(() => logout());
        })
        .catch((err) => console.log(err));
    }
  };
  const handleUpdatePassword = () => {
    if (user.email) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(updatePassword({ userID: user.sub, userEmail: user.email, token }))
        })
        .catch((err) => console.log(err));
    }
  };
  const handleChange = (event) => {
    const { target } = event;
    if (target.name === 'userName') {
      setFormData((prevState) => ({
        ...prevState,
        user_metadata: { [target.name]: target.value }
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [target.name]: target.value
      }));
    }
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
      <CardHeader color="accent" avatar={user.picture} avataralt={user.nickname} />
      <CardBody>
        <form onSubmit={handleSubmit}>
          <TextInput
            required
            value={formData.user_metadata.userName}
            onChange={handleChange}
            label="Username"
            name="userName" />
          <TextInput
            required
            value={formData.email}
            onChange={handleChange}
            label="Email"
            name="email"
            type="email" />
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
      <CardFooter hasBorder withColumn>
        <DialogConfirm
          onConfirm={handleUpdatePassword}
          buttonText="Update password"
          title="Send me a link!"
          message={`This will send you a reset link to this email address: ${user.email}`} />
        <DialogConfirm
          onConfirm={handleDeleteUser}
          buttonText="Delete user"
          title="Delete my user"
          color="warning"
          message="⚠️ Are you sure? Your account will be deleted! ⚠️" />
      </CardFooter>
    </Card>
  );
};
