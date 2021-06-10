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
  ListItemText
  // ListSubheader
} from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import { AlertOutline, Delete } from 'mdi-material-ui';
// import { ExpandLess, ExpandMore } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import DialogEdit from 'components/DialogEdit';
import DialogConfirm from 'components/DialogConfirm';

// import { rules as rulesData } from 'utils/data'

// import styling from './style';

// const useStyles = makeStyles(styling);

const RuleItem = ({ rule }) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={rule} />
        <ListItemSecondaryAction>
          <DialogEdit
            text
            title="Edit the rule"
            label="Rule Text"
            currentItem={rule}
            onConfirm={(value) => console.log(value)}
            edge="end" />
          <DialogConfirm
            icon={Delete}
            color="error"
            title=""
            message="Are you sure you want to do delete this rule?"
            onConfirm={() => console.log('hello')} />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
};

export default () => {
  const rules = useSelector((store) => store.legacy.rules);
  return (
    <Card>
      <CardHeader color="accent" icon={AlertOutline}>
        <Typography variant="subtitle2">RULES</Typography>
      </CardHeader>
      <CardBody>
        {_.map(rules, (rule, key) => (
          <List key={key}>
            <RuleItem rule={rule} />
          </List>
        ))}
      </CardBody>
    </Card>
  );
};
