import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default function CardFooter({ className, children, ...other }) {
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [className]: className !== undefined
  });
  return (
    <div className={cardFooterClasses} {...other}>
      {children}
    </div>
  );
}
