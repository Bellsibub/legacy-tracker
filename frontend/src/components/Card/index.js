import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default ({ children, ...other }) => {
  const classes = useStyles();
  const cardClasses = classNames({
    [classes.card]: true
  });
  return (
    <div className={cardClasses}>
      {children}
    </div>
  );
}
