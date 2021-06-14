/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
// material ui
import {
  Divider,
  GridList,
  GridListTile,
  Typography,
  useTheme,
  useMediaQuery,
  List,
  ListSubheader,
  Collapse,
  ListItem,
  ListItemText,
  ListItemIcon,
  Badge
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import IconItem from 'components/IconItem';

import { ExpandLess, ExpandMore, Check } from '@material-ui/icons';
import styling from './style';

const useStyles = makeStyles(styling);

const ListItemCollapse = ({ mainItem, itemsKey }) => {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  // console.log(mainItem);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemText primary={`${mainItem.firstName} ${mainItem.lastName}`} />
        <Badge badgeContent={mainItem[itemsKey].length} color="primary">
          {open ? <ExpandLess /> : <ExpandMore />}
        </Badge>
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          {mainItem[itemsKey].map(({ ...item }) => (
            <ListItem key={item.id} className={classes.nested}>
              <ListItemIcon>
                <img src={item.image} alt={item.name} className={classes.itemIcon} />
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          ))}
        </List>
        {open && <Divider />}
      </Collapse>
    </>
  );
};

export default ({ title, items, itemsKey }) => {
  const classes = useStyles();
  const theme = useTheme();
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const groups = _.groupBy(items, 'generation');

  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">{title}</Typography>
      </CardHeader>
      <CardBody>
        {/* list of items icons with actions */}
        {_.map(groups, (group, key) => (
          <List
            subheader={<ListSubheader component="div">{`GENERATION ${key}`}</ListSubheader>}
            key={`generation-${key}`}>
            {group.map((item) => (
              <div key={item.id}>
                {item.aspirations.length > 0 ? (
                  <ListItemCollapse mainItem={item} itemsKey={itemsKey} />
                ) : (
                  <>
                    <ListItem>
                      <ListItemText primary={`${item.firstName} ${item.lastName}`} />
                    </ListItem>
                    <Divider />
                  </>
                )}
              </div>
            ))}
          </List>
        ))}
      </CardBody>
    </Card>
  );
};
