import React from 'react';

// 3rd party components
import { Box, CircularProgress, LinearProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);
export default ({ line }) => {
  const classes = useStyles();
  if (line) {
    return <LinearProgress />;
  }
  return (
    <>
      <Box display="flex" justifyContent="center">
        <CircularProgress className={classes.loading} />
      </Box>
    </>
  );
};
