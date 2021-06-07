/* eslint-disable react/require-default-props */
import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';

// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import styling from './style';

const useStyles = makeStyles(styling);

export default function Card({ className, children, ...other }) {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardClasses} {...other}>
      {children}
    </div>
  );
}
