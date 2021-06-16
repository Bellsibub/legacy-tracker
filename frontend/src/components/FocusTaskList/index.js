import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { List, Divider } from '@material-ui/core';
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import FocusTaskItem from 'components/FocusTaskItem';

// styling
import styling from './style';

const useStyles = makeStyles(styling);

export default () => {
  const classes = useStyles();
  const tasks = useSelector((store) => {
    return _.flatMap(store.legacy.goals, (goals, key) => {
      const categoryTasks = _.filter(store.legacy[key], ['inFocus', true]);
      return _.map(categoryTasks, (task) => {
        // IF the category is simRelated we need to return that.
        if (key === 'aspirations') {
          return { ...task, category: key, simRelated: true };
        } else {
          return { ...task, category: key };
        }
      });
    });
  });
  console.log(tasks);
  return (
    <Card>
      <CardHeader color="blue" icon={EmojiEvents} />
      <CardBody>
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
      </CardBody>
    </Card>
  );
};
