import React from 'react';
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
// material ui
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  Typography
} from '@material-ui/core';
// import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import FocusToggle from 'components/FocusToggle';

// import { data } from 'utils/data';
import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const classes = useStyles();
  const { tasks } = useSelector((store) => store.legacy)

  const handleChanges = (value) => {
    console.log(value);
  };

  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">Tasks</Typography>
      </CardHeader>
      <CardBody>
        <List>
          {tasks.map((item) => (
            <div key={item.id}>
              <div className={classes.listItem}>
                <FocusToggle
                  onChange={handleChanges}
                  // onChange={dispatch(setFocus({ ...item }))}
                  checked={item.focused} />
                <ListItem
                  // onClick={dispatch(completeGoal('aspirations', { ...item }))}
                  button>
                  <ListItemText primary={item.text} className={classes.listText} />
                  <ListItemIcon>
                    <Checkbox
                      edge="end"
                      onChange={(e) => {
                        handleChanges(e.target.checked);
                      }}
                      // onChange={dispatch(completeGoal('aspirations', { ...item }))}
                      checked={item.complete} />
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
