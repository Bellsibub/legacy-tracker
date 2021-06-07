import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button
} from '@material-ui/core';
// import { addList } from 'store/tasks';
// import { useStyles } from './style';

export default ({ title, message, onConfirm }) => {
  // const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  // const [value, setValue] = React.useState('');
  // const dispatch = useDispatch();

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Button variant="contained" color="primary" onClick={toggleDialog}>
        test
      </Button>
      <Dialog open={open} onClose={toggleDialog} aria-labelledby="dialogConfirm">
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
