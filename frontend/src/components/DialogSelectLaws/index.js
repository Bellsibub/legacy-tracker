import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Button,
  IconButton,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Edit } from '@material-ui/icons';
// styles
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ title, buttonText, buttonIcon, onConfirm }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const lawsData = useSelector((store) => store.session.data.laws);

  const [open, setOpen] = React.useState(false);
  const [lawsState, setLaws] = React.useState({
    gender: null,
    bloodline: null,
    heir: null,
    species: null
  });

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleDialog();
    onConfirm(lawsState);
  };
  const handleSingleSelectChange = (event, newValue) => {
    const { id } = event.target;
    setLaws((prevState) => ({
      ...prevState,
      [id.split('-')[0]]: newValue
    }));
  };

  return (
    <>
      {buttonIcon && (
        <IconButton color="primary" onClick={toggleDialog}>
          <Edit />
        </IconButton>
      )}
      {buttonText && (
        <Button variant="contained" color="primary" onClick={toggleDialog}>
          {typeof buttonText === 'string' ? buttonText : 'edit'}
        </Button>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogSelectLaws"
        className={classes.dialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="dialogSelectLaws">{title}</DialogTitle>
          <DialogContent>
            {_.map(lawsData, (lawsOpts, key) => (
              <Autocomplete
                className={classes.dialogMultiSelect}
                id={key}
                name={key}
                value={lawsState[key]}
                onChange={handleSingleSelectChange}
                options={lawsOpts}
                getOptionSelected={(option, val) => option.title === val.title}
                getOptionLabel={(option) => option.title}
                renderInput={(params) => <TextField {...params} />} />
            ))}
          </DialogContent>
          <DialogActions>
            <Button onClick={toggleDialog}>Cancel</Button>
            <Button type="submit" variant="contained" color="primary">
              OK
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};
