import React from 'react';
import _ from 'lodash';

// 3rd party components
import {
  Divider,
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
import { ExpandLess, ExpandMore, Check } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';

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
            <ListItem key={item._id} className={classes.nested}>
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
  const generations = _.chain(items)
    .groupBy((sim) => sim.generation)
    .map((sim, gen) => ({ gen, sims: { ...sim } }))
    .orderBy((group) => Number(group.gen), ['desc'])
    .value();
  return (
    <Card>
      <CardHeader color="accent" text>
        <Typography variant="h3">{title}</Typography>
      </CardHeader>
      <CardBody>
        {_.map(generations, (gen, key) => (
          <List
            subheader={
              <ListSubheader component="div">{`GENERATION ${gen.gen}`}</ListSubheader>
            }
            key={`generation-${key}`}>
            {_.map(gen.sims, (item) => (
              <div key={item._id}>
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
