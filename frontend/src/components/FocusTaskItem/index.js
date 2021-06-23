import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@material-ui/core';
import { Delete } from '@material-ui/icons';

// services
import {
  updateCategoryItem,
  completeCategoryItemTask,
  toggleGoal
} from 'store/legacy/services';

// styling
import styles from './style';

const useStyles = makeStyles(styles);

export default ({ item, category }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();

  const { _id } = useSelector((store) => store.legacy);
  const checkedFocus = item.inFocus || !item.completed;

  const getFocusText = () => {
    switch (category) {
      case 'skills':
        return `Max out the ${item.name} skill`;
      case 'aspirations':
        return `Complete ${item.name} for ${item.focusTarget.firstName.toUpperCase()}`;
      case 'food':
        return item.text;
      default:
        return item.name;
    }
  };

  const handleSimRelatedChange = (complete) => {
    if (complete) {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(
            completeCategoryItemTask({
              category,
              itemID: item._id,
              legacyID: _id,
              simID: item.focusTarget._id,
              newData: {
                remove: 'focusTarget',
                inFocus: false,
                completed: item.completed + 1
              },
              token
            })
          );
        })
        .catch((err) => console.log(err));
    } else {
      getAccessTokenSilently()
        .then((token) => {
          dispatch(
            updateCategoryItem({
              category,
              itemID: item._id,
              legacyID: _id,
              newData: { remove: 'focusTarget', inFocus: false },
              token
            })
          );
        })
        .catch((err) => console.log(err));
    }
  };

  const handleNonRelationChange = (complete) => {
    if (complete) {
      getAccessTokenSilently()
        .then((token) => {
          if (item.hasItems) {
            dispatch(
              completeCategoryItemTask({
                category,
                itemID: item._id,
                legacyID: _id,
                newData: {
                  inFocus: false,
                  completed: item.completed + 1
                },
                token
              })
            );
          } else {
            dispatch(
              toggleGoal({
                category,
                goalID: item._id,
                legacyID: _id,
                value: !item.completed,
                property: 'completed',
                token
              })
            );
          }
        })
        .catch((err) => console.log(err));
    } else {
      getAccessTokenSilently()
        .then((token) => {
          if (item.hasItems) {
            dispatch(
              updateCategoryItem({
                category,
                itemID: item._id,
                legacyID: _id,
                newData: { inFocus: false },
                token
              })
            );
          } else {
            dispatch(
              toggleGoal({
                category,
                goalID: item._id,
                legacyID: _id,
                value: false,
                property: 'focused',
                token
              })
            );
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <>
      <ListItem
        button
        onClick={() => {
          if (item.simRelated) {
            handleSimRelatedChange(true);
          } else {
            handleNonRelationChange(true);
          }
        }}>
        <ListItemText
          className={classes.listTextMultiLine}
          primary={getFocusText()}
          secondary={category.toUpperCase()} />
        <ListItemIcon className={classes.listAction}>
          <Checkbox
            edge="end"
            onChange={() => {
              if (item.simRelated) {
                handleSimRelatedChange(true);
              } else {
                handleNonRelationChange(true);
              }
            }}
            checked={!checkedFocus} />
        </ListItemIcon>
      </ListItem>
      <IconButton
        className={classes.deleteButton}
        onClick={() => {
          if (item.simRelated) {
            handleSimRelatedChange(false);
          } else {
            handleNonRelationChange(false);
          }
        }}>
        <Delete />
      </IconButton>
    </>
  );
};
