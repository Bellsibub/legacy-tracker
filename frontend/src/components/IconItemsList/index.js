import React from 'react';
import _ from 'lodash';

// 3rd party components
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

// styling
import styling from './style';

const useStyles = makeStyles(styling);

export default ({ title, items, splitBy, ...other }) => {
  const classes = useStyles();
  const theme = useTheme();
  const largeScreen = useMediaQuery(theme.breakpoints.up('lg'))
  const mediumScreen = useMediaQuery(theme.breakpoints.only('md'))
  const smallScreen = useMediaQuery(theme.breakpoints.only('sm'));
  const tinyScreen = useMediaQuery(theme.breakpoints.only('xs'));
  const groups = _.groupBy(items, splitBy);
  const getCols = () => {
    if (tinyScreen) {
      return 3
    }
    if (smallScreen) {
      return 4
    }
    if (mediumScreen) {
      return 4
    }
    if (largeScreen) {
      return other.type === 'pack' ? 5 : 7
    }
  }

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
              cols={getCols()}>
              {group.map((item) => (
                <GridListTile key={item.name} className={classes.gridTile}>
                  <IconItem category={title.toLowerCase()} item={item} {...other} />
                </GridListTile>
              ))}
            </GridList>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};
