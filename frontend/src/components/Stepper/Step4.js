import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { DialogTitle, Divider } from '@material-ui/core';
// custom components
import TextInput from 'components/Inputs/TextInput';

// styling
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ legacyName, setlegacyName }) => {
  const classes = useStyles();

  const handleChange = (event) => {
    const { target } = event;
    setlegacyName(target.value);
  };

  return (
    <>
      {/* GENERAL */}
      <DialogTitle className={classes.dialogSectionTitle}>General</DialogTitle>
      <Divider className={classes.dialogDivider} />
      {/* name */}
      <TextInput
        value={legacyName}
        onChange={handleChange}
        label="Name"
        name="legacyName"
        required />
    </>
  );
};
