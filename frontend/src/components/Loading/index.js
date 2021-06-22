import React from 'react';
import { Box, CircularProgress, Container, LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);
export default ({ line }) => {
  const classes = useStyles();
  if (line) {
    return (<LinearProgress />)
  }
  return (
    <>
      <Box display="flex" justifyContent="center">
        <CircularProgress className={classes.loading} />
      </Box>
    </>
  )
}