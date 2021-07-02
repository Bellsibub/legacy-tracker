import React from 'react';
import _ from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useAuth0 } from '@auth0/auth0-react';

// 3rd party components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  List,
  ListItem,
  ListItemText,
  DialogContentText
} from '@material-ui/core';

// services
import { completeCategoryItem, updateCategoryItem } from 'store/legacy/services';
// styling
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ open, setOpen, categoryItem, category, actionType }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const { _id, generation } = useSelector((store) => store.legacy);
  const sims = useSelector((store) => {
    return _.filter(store.legacy.sims, (sim) => {
      const hasItem = _.filter(sim[category], _.matches(categoryItem));
      const inGeneration = sim.generation >= generation;
      if (hasItem.length === 0) {
        if (!inGeneration) {
          return false;
        }
        return true;
      } else {
        return false;
      }
    });
  });

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSelect = (simID) => {
    toggleDialog();
    switch (actionType) {
      case 'complete':
        getAccessTokenSilently().then((token) => {
          dispatch(
            completeCategoryItem({
              category,
              itemID: categoryItem._id,
              legacyID: _id,
              simID,
              token
            })
          );
        });
        break;
      case 'setfocus':
        getAccessTokenSilently().then((token) => {
          dispatch(
            updateCategoryItem({
              category,
              itemID: categoryItem._id,
              legacyID: _id,
              newData: { focusTarget: simID, inFocus: true },
              token
            })
          );
        });
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
          {sims.length !== 0 ? (
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
          ) : (
            <DialogContentText>No sim available for this category</DialogContentText>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
