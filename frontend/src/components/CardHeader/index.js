import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { Avatar } from '@material-ui/core'

import styling from './style';

const useStyles = makeStyles(styling);

export default function CardHeader({ children, text, ...other }) {
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[other.color]]: other.color
  });
  return (
    <div className={cardHeaderClasses}>
      {other.icon && (
        <>
          <div className={classes.cardHeaderIcon}>
            <other.icon />
          </div>
          {children}
        </>
      )}
      {other.avatar && (
        <>
          <div className={classes.cardHeaderAvatar}>
            <Avatar src={other.avatar} alt={other.avataralt} />
          </div>
          {children}
        </>
      )}
      {text && <div className={classes.cardHeaderText}>{children}</div>}
    </div>
  );
}
