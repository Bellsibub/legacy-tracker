import React from 'react';
import _ from 'lodash';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd-party components
import { ButtonBase, Icon, Menu, MenuItem } from '@material-ui/core';
import { CheckRounded } from '@material-ui/icons';
import { AlertBoxOutline } from 'mdi-material-ui';

// custom components
import DialogSelectSim from 'components/DialogSelectSim';
// services
import { updateCategoryItem, completeCategoryItem } from 'store/legacy/services';
// styling
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ category, item, simRelated }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [action, setAction] = React.useState('');
  const [dialog, setDialog] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const { _id } = useSelector((store) => store.legacy);

  const imageClasses = classNames({
    [classes.image]: true,
    [classes.focused]: item.inFocus
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (actionType, selectSim) => {
    handleClose();
    if (selectSim && simRelated) {
      setAction(actionType);
      setDialog(true);
    } else {
      switch (actionType) {
        case 'removefocus':
          dispatch(
            updateCategoryItem({
              category,
              itemID: item._id,
              legacyID: _id,
              newData: { inFocus: false }
            })
          );
          break;
        case 'complete':
          dispatch(
            completeCategoryItem({
              category,
              itemID: item._id,
              legacyID: _id
            })
          );
          break;
        case 'setfocus':
          dispatch(
            updateCategoryItem({
              category,
              itemID: item._id,
              legacyID: _id,
              newData: { inFocus: true }
            })
          );
          break;
        default:
          break;
      }
    }
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
        <Menu
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}>
          <MenuItem onClick={() => handleSelect('complete', true)}>
            Complete this
          </MenuItem>
          {item.inFocus ? (
            <MenuItem onClick={() => handleSelect('removefocus', false)}>
              Remove as Focus
            </MenuItem>
          ) : (
            <MenuItem onClick={() => handleSelect('setfocus', true)}>
              Set as Focus
            </MenuItem>
          )}
        </Menu>
        {simRelated && (
          <DialogSelectSim
            open={dialog}
            setOpen={setDialog}
            actionType={action}
            category={category}
            categoryItem={item} />
        )}
      </div>
    </>
  );
};
