import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  FormControl,
  MenuItem,
  Input,
  Typography,
  Select,
  IconButton
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ text, select, title, label, items, currentItem, onConfirm }) => {
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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <IconButton color="primary" onClick={toggleDialog}>
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSelection"
        className={classes.dialog}>
        <DialogTitle id="dialogEditSelection">{title}</DialogTitle>
        <DialogContent>
          {select && (
            <FormControl className={classes.dialogFullWidth}>
              <Select
                labelId="dialogSelectLabel"
                id="dialogSelect"
                value={value}
                onChange={handleChange}
                input={<Input />}>
                {items.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography variant="body1">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          )}
          {text && (
            <TextField
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
