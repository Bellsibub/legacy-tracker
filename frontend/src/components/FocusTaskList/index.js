import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { List, Divider, Typography } from '@material-ui/core';
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import FocusTaskItem from 'components/FocusTaskItem';

// styling
import { FormatListChecks } from 'mdi-material-ui';
import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const classes = useStyles();
  const tasks = useSelector((store) => {
    return _.flatMap(store.legacy.goals, (goals, key) => {
      let itemTasks = _.filter(store.legacy[key], ['inFocus', true]);
      itemTasks = _.map(itemTasks, (task) => {
        // IF the category is simRelated we need to return that.
        if (key === 'aspirations') {
          return { ...task, hasItems: true, category: key, simRelated: true };
        } else {
          return { ...task, hasItems: true, category: key };
        }
      });
      // IF the goals does not have items
      if (key === 'food') {
        let nonItemTasks = _.filter(store.legacy.goals[key], ['focused', true]);
        nonItemTasks = _.map(nonItemTasks, (_task) => {
          return { ..._task, category: key, hasItems: false }
        });
        return _.concat(itemTasks, nonItemTasks)
      }
      return itemTasks;
    });
  });

  return (
    <Card>
      <CardHeader color="accent" icon={FormatListChecks}>
        <Typography variant="subtitle2">FOCUS TASKS</Typography>
      </CardHeader>
      <CardBody>
        {_.size(tasks) !== 0 ? (
          <List>
            {tasks.map((item) => (
              <div key={item._id}>
                <div className={classes.listItem}>
                  <FocusTaskItem item={item} category={item.category} />
                </div>
                <Divider />
              </div>
            ))}
          </List>
        ) : (
          <Typography variant="caption" component="p">
            No tasks selected
          </Typography>
        )}
      </CardBody>
    </Card>
  );
};
