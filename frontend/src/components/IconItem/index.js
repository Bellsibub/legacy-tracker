import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

import { Icon } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import DialogItemActions from 'components/DialogItemActions';

import styling from './style';

const useStyles = makeStyles(styling);

export default ({ item }) => {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();
  const toggleDialog = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className={classes.root}>
        <ButtonBase
          focusRipple
          className={classes.image}
          onClick={toggleDialog}>
          <img src={item.image} alt={item.name} />
          <span className={classes.imageBackdrop} />
          {item.completed >= 1 && (
            <span className={classes.imageMarked}>
              <Icon>
                <CheckRounded />
              </Icon>
            </span>
          )}
        </ButtonBase>
      </div>
      <DialogItemActions
        title={`Editing ${item.name}`}
        id={item.id}
        open={open}
        setOpen={setOpen} />
    </>
  );
};
