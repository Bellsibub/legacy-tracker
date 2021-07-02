import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';
import { filterByPack } from 'utils/helpers';

const useStyles = makeStyles(dialog);

export default ({ value, onChange, ...other }) => {
  const classes = useStyles();
  const { packs } = useSelector((store) => store.legacy);
  const species = useSelector((store) => {
    if (!packs) {
      return filterByPack(store.session.data.species, other.packs);
    } else {
      return filterByPack(store.session.data.species, packs);
    }
  });

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="species"
      name="species"
      value={value || null}
      onChange={onChange}
      options={species}
      getOptionSelected={(option, val) => option._id === val._id}
      getOptionLabel={(option) => option.value}
      renderInput={(params) => <TextField {...params} label="Species" required />} />
  );
};
