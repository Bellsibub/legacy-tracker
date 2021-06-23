import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: '400px'
  }
}));

export default ({ image, alt }) => {
  const classes = useStyles();
  return (
    <>
      <img src={image} alt={alt} className={classes.image} />
    </>
  );
};
