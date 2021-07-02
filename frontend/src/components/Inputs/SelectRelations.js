import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd-party components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange, currentSimID, label, generation, required }) => {
  const classes = useStyles();
  const sims = useSelector((store) => {
    return _.chain(store.legacy.sims)
      .filter((sim) => sim._id !== currentSimID)
      .filter((sim) => sim.generation <= generation)
      .push({ firstName: 'Unknown', lastName: '', _id: '01234dads3qwaesdx' })
      .value();
  });

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id={label.toLowerCase()}
      name={label.toLowerCase()}
      value={value || null}
      onChange={onChange}
      options={sims}
      getOptionSelected={(option, val) => option._id === val._id}
      getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
      renderInput={(params) => (
        <TextField {...params} label={label} required={required} />
      )} />
  );
};
