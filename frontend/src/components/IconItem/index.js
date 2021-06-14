// /* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

import { ButtonBase, Icon } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';

import IconItemDropdown from 'components/IconItemDropdown';

// services
import { completeCategoryItem } from 'store/legacy/services';

import styling from './style';

const useStyles = makeStyles(styling);

export default ({ category, item }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { _id } = useSelector((store) => store.legacy);
  // eslint-disable-next-line no-unused-vars

  const actionOptions = [
    {
      title: 'Complete this',
      onAction: (simID) => {
        // dispatch(completeTask({ category, item }));
        dispatch(
          completeCategoryItem({ category, itemID: item._id, legacyID: _id, simID })
        );
        // console.log('for', id);
        console.log('hello');
      },
      hasOptions: true
    },
    {
      title: 'Revert completions',
      onAction: (id) => {
        console.log('for', id);
        console.log('hello');
      },
      hasOptions: false
    },
    {
      title: 'Set as Focus',
      onAction: (id) => {
        console.log('for', id);
        console.log('hello');
      },
      hasOptions: false
    }
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <ButtonBase focusRipple className={classes.image} onClick={handleClick}>
          <img src={item.image} alt={item.name} />
          <span className={classes.imageBackdrop} />
          {item.completed >= 1 && (
            <span className={classes.imageMarked}>
              <Icon>
                <CheckRounded />
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
