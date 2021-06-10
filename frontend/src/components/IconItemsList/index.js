import React from 'react';
import _ from 'lodash';
// material ui
import {
  Divider,
  GridList,
  GridListTile,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import IconItem from 'components/IconItem';

import styling from './style';

const useStyles = makeStyles(styling);

export default ({ title, items, splitBy }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const groups = _.groupBy(items, splitBy);

  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">{title}</Typography>
      </CardHeader>
      <CardBody>
        {_.map(groups, (group, key) => (
          <div key={key}>
            <Typography variant="subtitle1" color="textPrimary">
              {key.toUpperCase()}
            </Typography>
            <Divider />
            <GridList
              className={classes.gridList}
              cellHeight={64}
              cols={smallScreen ? 3 : 5}>
              {group.map((item) => (
                <GridListTile key={item.name} className={classes.gridTile}>
                  <IconItem item={item} />
                </GridListTile>
              ))}
            </GridList>
            <Divider />
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
