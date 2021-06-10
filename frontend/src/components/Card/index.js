import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import styles from './style';

const useStyles = makeStyles(styles);

export default ({ className, children, ...other }) => {
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
