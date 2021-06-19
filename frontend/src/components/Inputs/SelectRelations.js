/* eslint-disable no-underscore-dangle */
import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange, currentSimID, label, generation, newGen }) => {
  const classes = useStyles();
  const sims = useSelector((store) => store.legacy.sims.filter((sim) => sim._id !== currentSimID));
  const [simsOpts, setSims] = React.useState(sims);

  React.useEffect(() => {
    let _sims = [];
    // if (newGen) {
    _sims = sims.filter(
      (sim) => sim.generation === generation - 1 || sim.generation === generation
    );
    setSims(_sims);
    // } else {
    //   _sims = sims.filter((sim) => sim.generation === generation);
    //   setSims(_sims);
    // }
  }, [generation, newGen]);

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id={label.toLowerCase()}
      name={label.toLowerCase()}
      value={value || null}
      onChange={onChange}
      options={simsOpts}
      getOptionSelected={(option, val) => option._id === val._id}
      getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
      renderInput={(params) => <TextField {...params} label={label} />} />
  );
};
