/* eslint-disable no-underscore-dangle */
import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
// material ui components
import {
  TextField,
  Checkbox
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ value, onChange }) => {
  const classes = useStyles();
  const packs = useSelector((store) => {
    return _.filter(store.legacy.packs, ['active', true]);
  });
  const traits = useSelector((store) => {
    return _.filter(store.legacy.traits, (item) => {
      let st;
      _.forEach(packs, (pack) => {
        if (pack.name === item.pack) {
          st = true;
          return false;
        } else {
          st = false;
        }
      });
      return st;
    });
  });

  const validateTraitSelection = (selection) => {
    if (!value) {
      return false;
    }
    const adultTraits = value.filter((trait) => trait.type === 'adult');
    const toddlersTraits = value.filter((trait) => trait.type === 'toddler');
    return (
      (adultTraits.length >= 3 && selection.type === 'adult')
      || (toddlersTraits.length >= 1 && selection.type === 'toddler')
    );
  };

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="traits"
      name="traits"
      value={value || []}
      onChange={onChange}
      multiple
      disableCloseOnSelect
      filterSelectedOptions
      getOptionSelected={(option, val) => {
        // Accept empty string
        if (val === null || val._id === option._id) {
          return true;
        }
      }}
      getOptionDisabled={(option) => validateTraitSelection(option)}
      options={traits}
      groupBy={(option) => {
        return option.type.toUpperCase();
      }}
      getOptionLabel={(option) => (option ? option.name : null)}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox checked={selected} />
          {option.name}
        </>
      )}
      renderInput={(params) => <TextField {...params} label="Traits" />} />
  )
}