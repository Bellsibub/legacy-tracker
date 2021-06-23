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
import IconItem from 'components/IconItem';

const useStyles = makeStyles((theme) => ({
  gridList: {
    alignItems: 'center',
    '& > li': {
      height: 'auto !important'
    }
  }
}));

export default ({ items, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const groups = _.groupBy(items, 'type');

  return (
    <>
      {_.map(groups, (group, key) => (
        <div key={key}>
          <Typography variant="subtitle1" color="textPrimary">
            {key.toUpperCase()}
          </Typography>
          <Divider />
          <GridList
            className={classes.gridList}
            cols={smallScreen ? 3 : 5}>
            {group.map((item) => (
              <GridListTile key={item.name} className={classes.gridTile}>
                <IconItem
                  category="packs"
                  item={item}
                  type="pack"
                  justToggle
                  {...props} />
              </GridListTile>
            ))}
          </GridList>
        </div>
      ))}
    </>
  );
};
