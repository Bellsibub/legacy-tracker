import React from 'react';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton,
  ButtonBase
} from '@material-ui/core';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ title, message, onConfirm, className, children, ...other }) => {
  const classes = useStyles();

  const buttonBaseClasses = classNames({
    [className]: className !== undefined
  });

  const [open, setOpen] = React.useState(false);
  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      {other.icon && (
        <IconButton onClick={toggleDialog} disabled={other.disabled}>
          <other.icon color={other.color || 'primary'} />
        </IconButton>
      )}
      {other.buttonText && (
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDialog}
          disabled={other.disabled}>
          {other.buttonText}
        </Button>
      )}
      {other.buttonBase && (
        <ButtonBase
          focusRipple
          disabled={other.disabled}
          onClick={toggleDialog}
          className={buttonBaseClasses}>
          {children}
        </ButtonBase>
      )}
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogConfirm"
        className={classes.dialog}>
        <DialogTitle id="dialogConfirm">{title}</DialogTitle>
        <DialogContent>
          <Typography variant="body1">{message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button
            onClick={() => {
              toggleDialog();
              onConfirm();
            }}
            variant="contained"
            color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
