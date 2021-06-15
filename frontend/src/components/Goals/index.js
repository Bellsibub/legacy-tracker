/* eslint-disable no-underscore-dangle */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// material ui
import { List, Divider } from '@material-ui/core';
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import FocusToggle from 'components/FocusToggle';

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
                <FocusToggle item={item} category={category} isDynamic={isDynamic} />
              </div>
              <Divider />
            </div>
          ))}
        </List>
      </CardBody>
    </Card>
  );
};
