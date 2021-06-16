import React from 'react';
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
                <FocusTaskItem item={item} category={category} />
              </div>
              <Divider />
            </div>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
