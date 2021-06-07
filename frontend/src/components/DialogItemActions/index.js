import React from 'react';
// import { useDispatch } from 'react-redux';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText
} from '@material-ui/core';
// @material-ui/core components
import { makeStyles } from '@material-ui/core/styles';

import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

const actionOptions = [
  {
    title: 'Complete this',
    onAction: () => {
      console.log('hello');
    }
  },
  {
    title: 'Revert completions',
    onAction: () => {
      console.log('hello');
    }
  },
  {
    title: 'Set as Focus',
    onAction: () => {
      console.log('hello');
    }
  }
];

export default ({ title, open, setOpen }) => {
  const classes = useStyles();
  // const dispatch = useDispatch();

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSelection"
        className={classes.dialog}>
        <DialogTitle id="dialogEditSelection">{title}</DialogTitle>
        <DialogContent>
          <List>
            {actionOptions.map((action) => (
              <ListItem
                key={action.title}
                button
                onClick={() => {
                  toggleDialog();
                  action.onAction();
                }}>
                <ListItemText primary={action.title} />
              </ListItem>
            ))}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
