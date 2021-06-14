/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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

// actions
// import { completeTask } from 'store/legacy';

import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ title, open, setOpen, item, category, action }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id, generation } = useSelector((store) => store.legacy);
  const sims = useSelector((store) => {
    return store.legacy.sims.filter((sim) => sim.generation === generation)
  })

  const toggleDialog = () => {
    // setOpen({ open: !open.open, action: () => {} });
    setOpen(!open)
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
            {sims.map((sim) => (
              <ListItem
                key={sim._id}
                button
                onClick={() => {
                  toggleDialog();
                  action(sim._id);
                }}>
                <ListItemText primary={`${sim.firstName} ${sim.lastName}`} />
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
