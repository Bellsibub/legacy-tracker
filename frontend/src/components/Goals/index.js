import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { List, Divider } from '@material-ui/core';
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import GoalListItem from 'components/GoalListItem';

// styling
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ data, category, isDynamic }) => {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader color="blue" icon={EmojiEvents} />
      <CardBody>
        <List>
          {data.map((item) => (
            <div key={item._id}>
              <div className={classes.listItem}>
                <GoalListItem item={item} category={category} isDynamic={isDynamic} />
              </div>
              <Divider />
            </div>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
