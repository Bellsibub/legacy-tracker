import React from 'react';
// material ui
import DashboardIcon from '@material-ui/icons/Dashboard';
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Divider,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import { data } from 'utils/data';

import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="accent" icon={DashboardIcon} />
      <CardBody>
        {/* list of goals */}
        <List>
          {data.goals.aspirations.map((item) => (
            <>
              <div className={classes.listItem}>
                <IconButton
                  className={classes.focusButton}
                  small
                  color={item.focused ? 'primary' : 'default'}
                  // onClick={dispatch(setFocus({ ...item }))}
                  edge="start">
                  <DashboardIcon />
                </IconButton>
                <ListItem
                // onClick={dispatch(completeGoal('aspirations', { ...item }))}
                  button>
                  <ListItemText primary={item.text} />
                  <ListItemIcon>
                    <Checkbox
                      edge="end"
                      // onChange={dispatch(completeGoal('aspirations', { ...item }))}
                      checked={item.complete} />
                  </ListItemIcon>
                </ListItem>
              </div>
              <Divider />
            </>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
