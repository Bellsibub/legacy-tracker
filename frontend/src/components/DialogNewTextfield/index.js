import React from 'react';

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

export default ({ title, label, currentItem, onConfirm, ...other }) => {
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

  return (
    <>
      {other.icon && (
        <IconButton onClick={toggleDialog} disabled={other.disabled}>
          <other.icon color={other.color || 'primary'} />
        </IconButton>
      )}
      {other.buttonText && (
        <Button
          variant="contained"
          color="primary"
          onClick={toggleDialog}
          disabled={other.disabled}>
          {other.buttonText}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSelection"
        maxWidth="sm"
        fullWidth>
        <DialogTitle id="dialogEditSelection">{title}</DialogTitle>
        <DialogContent>
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
