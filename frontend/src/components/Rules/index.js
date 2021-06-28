import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react';

// 3rd-party components
import { Typography, List, ListItem, Divider, ListItemText } from '@material-ui/core';
import { AlertOutline, Delete } from 'mdi-material-ui';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogEdit from 'components/DialogEdit';
import DialogConfirm from 'components/DialogConfirm';

// services
import { updateRules, deleteRule, addRules } from 'store/legacy/services';
import DialogNewTextfield from 'components/DialogNewTextfield';

const RuleItem = ({ rule }) => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { _id } = useSelector((store) => store.legacy);

  const handleUpdateRule = (value) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(updateRules({ value, legacyID: _id, rulesid: rule._id, token }));
      })
      .catch((err) => console.log(err));
  };
  const handleDeleteRule = () => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(deleteRule({ legacyID: _id, rulesid: rule._id, token }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <ListItem>
        <ListItemText primary={rule.value} />
        <DialogEdit
          text
          title="Edit the rule"
          label="Rule Text"
          currentItem={rule.value}
          onConfirm={handleUpdateRule}
          edge="end" />
        <DialogConfirm
          icon={Delete}
          color="error"
          title=""
          message="Are you sure you want to do delete this rule?"
          onConfirm={handleDeleteRule} />
      </ListItem>
      <Divider />
    </>
  );
};

export default () => {
  const dispatch = useDispatch();
  const { getAccessTokenSilently } = useAuth0();
  const { _id, rules } = useSelector((store) => store.legacy);

  const handleAddRule = (value) => {
    getAccessTokenSilently()
      .then((token) => {
        dispatch(addRules({ value, legacyID: _id, token }));
      })
      .catch((err) => console.log(err));
  };
  return (
    <Card>
      <CardHeader color="accent" icon={AlertOutline}>
        <Typography variant="subtitle2">RULES</Typography>
      </CardHeader>
      <CardBody>
        <List>
          {_.map(rules, (rule) => (
            <RuleItem key={rule._id} rule={rule} />
          ))}
        </List>
      </CardBody>
      <CardFooter>
        <DialogNewTextfield
          buttonText="Add New"
          title="Add a new rule"
          label="Rule Text"
          currentItem=""
          onConfirm={handleAddRule}
          edge="end" />
      </CardFooter>
    </Card>
  );
};
