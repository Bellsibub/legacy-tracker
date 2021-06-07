import React from 'react';
// nodejs library that concatenates classes
import classNames from 'classnames';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

// @material-ui/icons

import styling from './style';

const useStyles = makeStyles(styling);

export default function CardHeader({
  className,
  children,
  color,
  stats,
  text,
  ...other
}) {
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color]]: color,
    [classes.cardHeaderStats]: stats,
    [className]: className !== undefined
  });
  return (
    <div className={cardHeaderClasses} {...other}>
      {other.icon && (
        <>
          <div className={classes.cardHeaderIcon}>
            <other.icon />
          </div>
          {children}
        </>
      )}
      {text && (
        <div className={classes.cardHeaderText}>
          {children}
        </div>
      )}
    </div>
  );
}
