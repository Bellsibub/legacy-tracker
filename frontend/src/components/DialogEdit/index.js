import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Edit } from '@material-ui/icons';

// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({
  text,
  select,
  title,
  label,
  items,
  currentItem,
  onConfirm,
  keyValue,
  ...iconProps
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(currentItem);
  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    if (event.key === 'Enter' || event.type === 'click') {
      toggleDialog();
      onConfirm(value);
    }
  };
  const handleMultiSelectChange = (event, newValue) => {
    setValue(newValue)
  };

  return (
    <>
      <IconButton color="primary" onClick={toggleDialog} {...iconProps}>
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSelection"
        maxWidth="sm"
        fullWidth>
        <DialogTitle id="dialogEditSelection">{title}</DialogTitle>
        <DialogContent>
          {select && (
            <Autocomplete
              className={classes.dialogMultiSelect}
              id={keyValue}
              name={keyValue}
              value={value}
              onChange={handleMultiSelectChange}
              options={items}
              getOptionSelected={(option, val) => option[keyValue] === val[keyValue]}
              getOptionLabel={(option) => option[keyValue]}
              renderInput={(params) => <TextField {...params} />} />
          )}
          {text && (
            <TextField
              multiline
              autoFocus
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyPress={handleSubmit}
              margin="dense"
              id="name"
              label={label}
              type="text"
              fullWidth />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleDialog}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            color="primary"
            disabled={value === currentItem}>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
