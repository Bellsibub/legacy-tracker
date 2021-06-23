import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from "@auth0/auth0-react";

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
import { updateLaws, getLegacy, updateHeirs } from 'store/legacy/services';
import { filterRunningSims } from 'utils/calculations'

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
  const { getAccessTokenSilently } = useAuth0();

  const { laws, _id, generation } = useSelector((store) => store.legacy);

  const handleSelectedLaw = (value, key) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateLaws({ laws: { [key]: value }, legacyID: _id, token })).then(() => {
          dispatch(getLegacy({ legacyID: _id, token })).then((updatedLegacy) => {
            const simsRunning = filterRunningSims(updatedLegacy, generation);
            dispatch(updateHeirs({ simsRunning, legacyID: _id, token }));
          });
        });
      })
      .catch((err) => console.log(err))
  };

  return (
    <Card>
      <CardHeader color="accent" icon={Gavel}>
        <Typography variant="subtitle2">LAWS</Typography>
      </CardHeader>
      {laws && (
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
      )}
    </Card>
  );
};
