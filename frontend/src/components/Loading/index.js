import React from 'react';
import { LinearProgress } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
// styles
import styles from 'assets/jss/mainPanel';

const useStyles = makeStyles(styles);
export default () => {
  const classes = useStyles();
  return (
    <LinearProgress />
  )
}