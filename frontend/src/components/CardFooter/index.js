import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// styles
import styles from './style';

const useStyles = makeStyles(styles);

export default function CardFooter({ children, ...other }) {
  const classes = useStyles();
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.hasBorder]: other.hasBorder,
    [classes.withColumn]: other.withColumn
  });
  return <div className={cardFooterClasses}>{children}</div>;
}
