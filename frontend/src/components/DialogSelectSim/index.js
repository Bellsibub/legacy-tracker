import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
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

// services
import { completeCategoryItem, updateCategoryItem } from 'store/legacy/services';
// styling
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ open, setOpen, categoryItem, category, actionType }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id, generation } = useSelector((store) => store.legacy);
  const sims = useSelector((store) => {
    return store.legacy.sims.filter((sim) => sim.generation >= generation);
  });

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSelect = (simID) => {
    toggleDialog();
    switch (actionType) {
      case 'complete':
        dispatch(
          completeCategoryItem({
            category,
            itemID: categoryItem._id,
            legacyID: _id,
            simID
          })
        );
        break;
      case 'setfocus':
        dispatch(
          updateCategoryItem({
            category,
            itemID: categoryItem._id,
            legacyID: _id,
            newData: { focusTarget: simID, inFocus: true }
          })
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Dialog open={open} onClose={toggleDialog} fullWidth className={classes.dialog}>
        <DialogTitle>{`Editing ${categoryItem.name}`}</DialogTitle>
        <DialogContent>
          <List>
            {sims.map((sim) => (
              <ListItem
                key={sim._id}
                button
                onClick={() => {
                  handleSelect(sim._id);
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