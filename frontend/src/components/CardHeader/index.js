import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { Avatar } from '@material-ui/core'

import styling from './style';

const useStyles = makeStyles(styling);

export default function CardHeader({ className, children, color, text, ...other }) {
  const classes = useStyles();
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color]]: color,
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
