import React from 'react';
import { useSelector } from 'react-redux'
// material ui
import { Divider, Chip, Avatar, Grid, Typography } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogSims from 'components/DialogSims';
import { Crown } from 'mdi-material-ui';

// import styling from './style';

// const useStyles = makeStyles(styling);

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
            <Grid item key={item.id}>
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
  // const classes = useStyles();
  const ruler = useSelector((store) => store.legacy.ruler)
  return (
    <Card>
      <CardHeader color="accent" icon={Crown}>
        <Typography variant="subtitle2">RULER</Typography>
        <Typography variant="h2">{`${ruler.firstName} ${ruler.lastName}`}</Typography>
      </CardHeader>
      <ChipSection items={ruler.traits} title="traits" />
      <ChipSection items={ruler.aspirations} title="aspirations" />
      <CardFooter>
        <DialogSims
          buttonText
          title={`Edit ${ruler.firstName} ${ruler.lastName}`}
          currentItem={ruler}
          onConfirm={(value) => console.log(value)} />
      </CardFooter>
    </Card>
  );
};
