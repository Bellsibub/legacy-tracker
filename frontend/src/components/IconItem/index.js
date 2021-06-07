import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
// import Typography from '@material-ui/core/Typography';

import { Icon } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import DialogItemActions from 'components/DialogItemActions';

import styling from './style';

const useStyles = makeStyles(styling);

export default ({ ...image }) => {
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
          key={image.title}
          className={classes.image}
          onClick={toggleDialog}>
          <img src={image.url} alt={image.title} />
          <span className={classes.imageBackdrop} />
          {image.checked && (
            <span className={classes.imageMarked}>
              <Icon>
                <CheckRounded />
              </Icon>
            </span>
          )}
        </ButtonBase>
      </div>
      <DialogItemActions
        title={`Editing ${image.title}`}
        open={open}
        setOpen={setOpen} />
    </>
  );
};
