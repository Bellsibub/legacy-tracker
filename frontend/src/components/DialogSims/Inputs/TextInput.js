/* eslint-disable no-underscore-dangle */
import React from 'react';

import { TextField } from '@material-ui/core';

export default ({ value, onChange, label, name }) => {
  return (
    <TextField
      required
      autoFocus
      value={value || ''}
      onChange={onChange}
      margin="dense"
      name={name}
      label={label}
      type="text"
      fullWidth />
  );
};
