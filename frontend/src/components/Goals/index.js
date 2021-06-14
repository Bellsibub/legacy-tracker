/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// material ui
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider
} from '@material-ui/core';
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import FocusToggle from 'components/FocusToggle';

// services
import { toggleGoal } from 'store/legacy/services';

// import { data } from 'utils/data';
import styling from './style';

const useStyles = makeStyles(styling);

const CheckBox = ({ item, category }) => {
  const dispatch = useDispatch();
  const { _id } = useSelector((store) => store.legacy);
  const [checked, setChecked] = React.useState(item.completed);

  const handleChanges = () => {
    setChecked(!checked);
    dispatch(
      toggleGoal({
        category,
        goalID: item._id,
        legacyID: _id,
        value: !checked,
        property: 'completed'
      })
    );
  };

  return (
    <Checkbox
      edge="end"
      onChange={handleChanges}
      // onChange={dispatch(completeGoal('aspirations', { ...item }))}
      checked={checked} />
  );
};

export default ({ data, category }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="blue" icon={EmojiEvents} />
      <CardBody>
        <List>
          {data.map((item) => (
            <div key={item._id}>
              <div className={classes.listItem}>
                <FocusToggle
                  item={item}
                  // onChange={dispatch(setFocus({ ...item }))}
                  category={category} />
                <ListItem
                  // onClick={dispatch(completeGoal('aspirations', { ...item }))}
                  button>
                  <ListItemText primary={item.text} className={classes.listText} />
                  <ListItemIcon>
                    <CheckBox item={item} category={category} />
                  </ListItemIcon>
                </ListItem>
              </div>
              <Divider />
            </div>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
