import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
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
  const aspirations = useSelector((store) => {
    return _.filter(store.legacy.aspirations, (item) => {
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

  return (
    <Autocomplete
      className={classes.dialogMultiSelect}
      id="aspirations"
      name="aspirations"
      value={value || []}
      onChange={onChange}
      getOptionSelected={(option, val) => option._id === val._id}
      multiple
      disableCloseOnSelect
      filterSelectedOptions
      options={aspirations}
      groupBy={(option) => {
        return option.type.toUpperCase();
      }}
      getOptionLabel={(option) => option.name}
      renderOption={(option, { selected }) => (
        <>
          <Checkbox checked={selected} />
          {option.name}
        </>
      )}
      renderInput={(params) => <TextField {...params} label="Aspirations" />} />
  )
}