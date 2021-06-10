import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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

import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

const actionOptions = [
  {
    title: 'Complete this',
    onAction: (id) => {
      console.log('for', id);
      console.log('hello');
    }
  },
  {
    title: 'Revert completions',
    onAction: (id) => {
      console.log('for', id);
      console.log('hello');
    }
  },
  {
    title: 'Set as Focus',
    onAction: (id) => {
      console.log('for', id);
      console.log('hello');
    }
  }
];

export default ({ title, open, setOpen, id }) => {
  const classes = useStyles();

  const toggleDialog = () => {
    setOpen(!open);
  };

  return (
    <>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogItemActions"
        className={classes.dialog}>
        <DialogTitle id="dialogItemActions">{title}</DialogTitle>
        <DialogContent>
          <List>
            {actionOptions.map((action) => (
              <ListItem
                key={action.title}
                button
                onClick={() => {
                  toggleDialog();
                  action.onAction(id);
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
