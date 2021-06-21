import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

// 3rd party components
import { Divider, Chip, Avatar, Grid, Typography } from '@material-ui/core';
import { Crown } from 'mdi-material-ui';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';

// services
import { updateSim } from 'store/legacy/services';

const ChipSection = ({ items, title }) => {
  return (
    <>
      <Divider variant="middle" />
      <CardBody>
        <Typography variant="subtitle2">{title.toUpperCase()}</Typography>
        <Grid
          container
          direction="row"
          justify="flex-end"
          alignItems="center"
          spacing={1}>
          {items.map((item) => (
            <Grid item key={item._id}>
              <Chip
                label={item.name}
                variant="outlined"
                color="primary"
                avatar={<Avatar src={item.image} />} />
            </Grid>
          ))}
        </Grid>
      </CardBody>
    </>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently, isLoading, isAuthenticated } = useAuth0();

  const { ruler, _id } = useSelector((store) => store.legacy);

  const handleEditSimConfirm = (newSim) => {
    console.log('NEW sim to update', newSim);
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateSim({ simData: newSim, legacyID: _id, token }));
      })
      .catch((err) => console.log(err))
  };
  return (
    <Card>
      <CardHeader color="accent" icon={Crown}>
        <Typography variant="subtitle2">RULER</Typography>
        <Typography variant="h2">{`${ruler.firstName} ${ruler.lastName}`}</Typography>
      </CardHeader>
      {ruler.traits.length > 0 && <ChipSection items={ruler.traits} title="traits" />}
      {ruler.aspirations.length > 0 && (
        <ChipSection items={ruler.aspirations} title="completed aspirations" />
      )}
      <CardFooter>
        <DialogSims
          buttonText
          title={`Edit ${ruler.firstName} ${ruler.lastName}`}
          currentItem={ruler}
          onConfirm={handleEditSimConfirm} />
      </CardFooter>
    </Card>
  );
};
