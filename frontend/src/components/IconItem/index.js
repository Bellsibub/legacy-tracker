// /* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase, Icon } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';

import IconItemDropdown from 'components/IconItemDropdown';

// services
import { completeCategoryItem, updateCategoryItem } from 'store/legacy/services';

import { AlertBoxOutline } from 'mdi-material-ui';
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ category, item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { _id } = useSelector((store) => store.legacy);

  const imageClasses = classNames({
    [classes.image]: true,
    [classes.focused]: item.inFocus
  });
  const actionOptions = _.filter(
    [
      {
        title: 'Complete this',
        onAction: (simID) => {
          dispatch(
            completeCategoryItem({ category, itemID: item._id, legacyID: _id, simID })
          );
        },
        hasOptions: true,
        visible: true
      },
      {
        title: 'Revert completions',
        onAction: (id) => {
          console.log('for', id);
          console.log('hello');
        },
        hasOptions: false,
        visible: true
      },
      {
        title: 'Set as Focus',
        onAction: (simID) => {
          const newData = { focusTarget: simID, inFocus: true };
          dispatch(
            updateCategoryItem({ category, itemID: item._id, legacyID: _id, newData })
          );
        },
        hasOptions: true,
        visible: !item.inFocus
      },
      {
        title: 'Remove Focus',
        onAction: () => {
          const newData = { remove: 'focusTarget', inFocus: false };
          dispatch(
            updateCategoryItem({ category, itemID: item._id, legacyID: _id, newData })
          );
        },
        hasOptions: true,
        visible: item.inFocus || false
      }
    ],
    (o) => o.visible
  );

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <ButtonBase focusRipple className={imageClasses} onClick={handleClick}>
          <img src={item.image} alt={item.name} />
          <span className={classes.imageBackdrop} />
          {item.completed >= 1 && (
            <span className={classes.imageMarked}>
              <Icon>
                <CheckRounded />
              </Icon>
            </span>
          )}
          {item.inFocus && (
            <span className={classes.imageFocused}>
              <Icon>
                <AlertBoxOutline />
              </Icon>
            </span>
          )}
        </ButtonBase>
        <IconItemDropdown
          category={category}
          categoryItem={item}
          items={actionOptions}
          anchorEl={anchorEl}
          handleClose={handleClose} />
      </div>
    </>
  );
};
