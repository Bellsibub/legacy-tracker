import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
// import { addList } from 'store/tasks';
// import { useStyles } from './style';
import { makeStyles } from '@material-ui/core/styles';
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ title, message, onConfirm, ...other }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState('');
  // const dispatch = useDispatch();
  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      {other.icon && (
        <IconButton color="primary" onClick={toggleDialog}>
          <other.icon />
        </IconButton>
      )}
      {other.buttonText && (
        <Button variant="contained" color="primary" onClick={toggleDialog}>
          {other.buttonText}
        </Button>
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
