import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
// material ui
import {
  Typography,
  List,
  ListItem,
  Divider,
  ListItemSecondaryAction,
  Collapse,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Gavel } from 'mdi-material-ui';
import { ExpandLess, ExpandMore } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import DialogEdit from 'components/DialogEdit';

import { laws as lawsData } from 'utils/data'

import styling from './style';

const useStyles = makeStyles(styling);

const LawItemCollapse = ({ category, ...law }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleExpandToggle = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleExpandToggle}>
        <ListItemText primary={law.title} />
        {open ? <ExpandLess /> : <ExpandMore />}
        <ListItemSecondaryAction>
          <DialogEdit
            select
            title="Select new law"
            items={lawsData[category]}
            currentItem={law}
            keyValue="title"
            onConfirm={(value) => console.log(value)}
            edge="end" />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List dense component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemText primary={law.description} />
          </ListItem>
        </List>
        {open && <Divider />}
      </Collapse>
    </>
  );
};

export default () => {
  const laws = useSelector((store) => store.legacy.laws);
  return (
    <Card>
      <CardHeader color="accent" icon={Gavel}>
        <Typography variant="subtitle2">LAWS</Typography>
      </CardHeader>
      <CardBody>
        {_.map(laws, (law, key) => (
          <List
            subheader={<ListSubheader component="div">{`${key.toUpperCase()}`}</ListSubheader>}
            key={`laws-${key}`}>
            <LawItemCollapse {...law} category={key} />
          </List>
        ))}
      </CardBody>
    </Card>
  );
};
