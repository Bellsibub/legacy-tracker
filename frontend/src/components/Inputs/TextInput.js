import React from 'react';

import { TextField } from '@material-ui/core';

export default ({ value, onChange, label, name, ...props }) => {
  return (
    <TextField
      value={value || ''}
      onChange={onChange}
      margin="dense"
      name={name}
      label={label}
      type="text"
      fullWidth
      {...props} />
  );
};
