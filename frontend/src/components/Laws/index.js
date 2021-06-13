/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
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
import DialogSelectLaws from 'components/DialogSelectLaws';

// services
import { updateLegacy } from 'store/legacy/services';

import styling from './style';

const useStyles = makeStyles(styling);

const LawItemCollapse = ({ category, onConfirm, ...law }) => {
  const classes = useStyles();
  const { laws } = useSelector((store) => store.session.data);
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
            items={laws[category]}
            currentItem={law}
            keyValue="title"
            onConfirm={onConfirm}
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
  const dispatch = useDispatch();
  const { laws, _id } = useSelector((store) => store.legacy);

  const handleSelectedLaw = (value, key) => {
    dispatch(updateLegacy({ newData: { laws: { [key]: value } }, legacyID: _id }));
  };
  const handleNewLaws = (value) => {
    dispatch(updateLegacy({ newData: { laws: value }, legacyID: _id }))
  }

  return (
    <Card>
      <CardHeader color="accent" icon={Gavel}>
        <Typography variant="subtitle2">LAWS</Typography>
      </CardHeader>
      {laws ? (
        <CardBody>
          {_.map(laws, (law, key) => (
            <List
              subheader={
                <ListSubheader component="div">{`${key.toUpperCase()}`}</ListSubheader>
              }
              key={`laws-${key}`}>
              <LawItemCollapse
                {...law}
                category={key}
                onConfirm={(value) => handleSelectedLaw(value, key)} />
            </List>
          ))}
        </CardBody>
      ) : (
        <CardBody>
          <DialogSelectLaws
            title="Select new law"
            // items={laws[category]}
            // currentItem={law}
            // keyValue="title"
            buttonText="Select new law"
            onConfirm={handleNewLaws}
            edge="end" />
        </CardBody>
      )}
    </Card>
  );
};
