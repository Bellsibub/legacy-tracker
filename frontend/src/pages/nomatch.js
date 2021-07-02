import React from 'react';
import { useSelector } from 'react-redux';

// 3rd party components
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

// custom components
import Loading from 'components/Loading';
// styles
import styles from 'assets/jss/fullPageStyles';

const useStyles = makeStyles(styles);

export default () => {
  const classes = useStyles();
  const { fetchDone } = useSelector((store) => store.legacy);
  return (
    <>
      <Grid
        container
        spacing={2}
        direction="column"
        justify="center"
        alignItems="center"
        className={classes.textWrapper}>
        {fetchDone ? (
          <>
            <Typography className={classes.title} variant="h1">
              404
            </Typography>
            <Typography className={classes.subTitle} variant="h4">
              Page not found
            </Typography>
            <Typography className={classes.description} varaint="h3">
              Ooooups! Looks like you got lost.
            </Typography>
          </>
        ) : (
          <Loading />
        )}
      </Grid>
    </>
  );
};
