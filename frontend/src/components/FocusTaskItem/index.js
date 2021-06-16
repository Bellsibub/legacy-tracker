import React from 'react';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemSecondaryAction
} from '@material-ui/core';
import { Delete, PriorityHigh, PriorityHighOutlined } from '@material-ui/icons';

// services
import { updateCategoryItem, completeCategoryItemTask } from 'store/legacy/services';
// styling
import styles from './style';

const useStyles = makeStyles(styles);

export default ({ item, category }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.legacy);
  const checkedFocus = item.inFocus;

  const handleChange = (complete) => {
    console.log(complete);
    if (complete) {
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
          }
        })
      );
    } else {
      dispatch(
        updateCategoryItem({
          category,
          itemID: item._id,
          legacyID: _id,
          newData: { remove: 'focusTarget', inFocus: false }
        })
      );
    }
  };

  return (
    <>
      <ListItem
        button
        onClick={() => {
          handleChange(true);
        }}>
        <ListItemText primary={item.name} />
        <ListItemIcon className={classes.listAction}>
          <Checkbox
            edge="end"
            onChange={() => {
              handleChange(true);
            }}
            checked={!checkedFocus} />
        </ListItemIcon>
      </ListItem>
      <IconButton
        className={classes.deleteButton}
        onClick={() => {
          handleChange(false);
        }}>
        <Delete />
      </IconButton>
    </>
  );
};
