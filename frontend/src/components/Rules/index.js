import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';

// 3rd-party components
import { Typography, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { AlertOutline, Delete } from 'mdi-material-ui';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import DialogEdit from 'components/DialogEdit';
import DialogConfirm from 'components/DialogConfirm';

const RuleItem = ({ rule }) => {
  return (
    <>
      <ListItem>
        <ListItemText primary={rule.value} />
        <DialogEdit
          text
          title="Edit the rule"
          label="Rule Text"
          currentItem={rule.value}
          onConfirm={(value) => console.log(value)}
          edge="end" />
        <DialogConfirm
          icon={Delete}
          color="error"
          title=""
          message="Are you sure you want to do delete this rule?"
          onConfirm={() => console.log('hello')} />
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
        {_.map(rules, (rule) => (
          <List key={rule._id}>
            <RuleItem rule={rule} />
          </List>
        ))}
      </CardBody>
    </Card>
  );
};
