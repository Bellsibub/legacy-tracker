import React from 'react';
// material ui components
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
  IconButton,
  InputLabel,
  Grid,
  Switch,
  Divider,
  Checkbox,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import { Edit } from '@material-ui/icons';

import dialog from 'assets/jss/dialog';

import { data, traits, aspirations, sims } from 'utils/data';

const useStyles = makeStyles(dialog);

export default ({ title, buttonText, buttonIcon, currentItem, onConfirm }) => {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const [simInfo, setSimInfo] = React.useState({ ...currentItem });

  const toggleDialog = () => {
    setOpen(!open);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    toggleDialog();
    onConfirm(simInfo);
  };

  const handleChange = (event) => {
    const { name, value, checked } = event.target;
    setSimInfo((prevState) => ({
      ...prevState,
      [name]: checked || value
    }));
  };

  const handleTraitChange = (event, newValue) => {
    setSimInfo((prevState) => ({
      ...prevState,
      traits: [...newValue]
    }));
  };
  const handleAspirationChange = (event, newValue) => {
    setSimInfo((prevState) => ({
      ...prevState,
      aspirations: [...newValue]
    }));
  };
  const handleRelationChange = (event, newValue) => {
    const { id } = event.target;
    setSimInfo((prevState) => ({
      ...prevState,
      relations: {
        ...simInfo.relations,
        [id.split('-')[0]]: newValue
      }
    }));
  };
  const handleSingleSelectChange = (event, newValue) => {
    const { id } = event.target;
    setSimInfo((prevState) => ({
      ...prevState,
      [id.split('-')[0]]: newValue
    }));
  };

  const validateTraitSelection = (selection) => {
    const adultTraits = simInfo.traits.filter((trait) => trait.type === 'adult');
    const toddlersTraits = simInfo.traits.filter((trait) => trait.type === 'toddler');
    return (
      (adultTraits.length >= 3 && selection.type === 'adult')
      || (toddlersTraits.length >= 1 && selection.type === 'toddler')
    );
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
          EDIT
        </Button>
      )}
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSims"
        className={classes.dialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="dialogEditSims">{title}</DialogTitle>
          <DialogContent>
            {/* GENERAL */}
            <DialogTitle className={classes.dialogSectionTitle}>General</DialogTitle>
            <Divider className={classes.dialogDivider} />
            {/* name */}
            <TextField
              required
              autoFocus
              value={simInfo.firstName}
              onChange={handleChange}
              margin="dense"
              id="fname"
              name="firstName"
              label="First Name"
              type="text"
              fullWidth />
            <TextField
              required
              value={simInfo.lastName}
              onChange={handleChange}
              margin="dense"
              id="lname"
              name="lastName"
              label="Last Name"
              type="text"
              fullWidth />
            {/* Gender */}
            <FormControl required className={classes.dialogFullWidth}>
              <InputLabel id="gender">Gender</InputLabel>
              <Select
                labelId="gender"
                id="genderSelect"
                name="gender"
                value={simInfo.gender}
                onChange={handleChange}
                input={<Input />}>
                {data.genders.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography variant="body1">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* is adopted */}
            <FormControl className={classes.dialogFullWidth}>
              <Typography component="div">
                <Grid component="label" container alignItems="center" spacing={1}>
                  <Grid item>Naturally Born</Grid>
                  <Grid item>
                    <Switch
                      checked={simInfo.adopted}
                      onChange={handleChange}
                      name="adopted" />
                  </Grid>
                  <Grid item>Adopted</Grid>
                </Grid>
              </Typography>
            </FormControl>
            {/* species */}
            <FormControl required className={classes.dialogFullWidth}>
              <InputLabel id="species">Species</InputLabel>
              <Select
                labelId="species"
                id="speciesSelect"
                name="species"
                value={simInfo.species}
                onChange={handleChange}
                input={<Input />}>
                {data.species.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography variant="body1">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* TRAITS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Traits and Aspirations
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="traits"
              name="traits"
              value={simInfo.traits}
              onChange={handleTraitChange}
              multiple
              disableCloseOnSelect
              filterSelectedOptions
              getOptionSelected={(option, val) => option.id === val.id}
              getOptionDisabled={(option) => validateTraitSelection(option)}
              options={traits}
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
              renderInput={(params) => <TextField {...params} label="Traits" />} />
            {/* ASPIRATIONS (multiselect) */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="aspirations"
              name="aspirations"
              value={simInfo.aspirations}
              onChange={handleAspirationChange}
              getOptionSelected={(option, val) => option.id === val.id}
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
            {/* RELATIONS */}
            <DialogTitle className={classes.dialogSectionTitle}>Relations</DialogTitle>
            <Divider className={classes.dialogDivider} />
            {/* Mother and Father */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="mother"
              name="mother"
              value={simInfo.relations.mother}
              onChange={handleRelationChange}
              options={sims}
              getOptionSelected={(option, val) => option.id === val.id}
              getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
              renderInput={(params) => <TextField {...params} label="Mother" />} />
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="father"
              name="father"
              value={simInfo.relations.father}
              onChange={handleRelationChange}
              options={sims}
              getOptionSelected={(option, val) => option.id === val.id}
              getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
              renderInput={(params) => <TextField {...params} label="Father" />} />
            {/* Spouse */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="spouse"
              name="spouse"
              value={simInfo.relations.spouse}
              onChange={handleRelationChange}
              options={data.sims}
              getOptionSelected={(option, val) => option.id === val.id}
              getOptionLabel={(option) => `${option.firstName} ${option.lastName}`}
              renderInput={(params) => <TextField {...params} label="Spouse" />} />
            {/* LEGACY STATUS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Legacy status
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
            {/* Role */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="role"
              name="role"
              value={simInfo.role}
              onChange={handleSingleSelectChange}
              options={data.roles}
              renderInput={(params) => <TextField {...params} label="Role" />} />
            {/* Status */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="status"
              name="status"
              value={simInfo.status}
              onChange={handleSingleSelectChange}
              options={data.status}
              renderInput={(params) => <TextField {...params} label="Status" />} />

            {/* Cause of Death */}
            <Autocomplete
              className={classes.dialogMultiSelect}
              id="causeOfDeath"
              name="causeOfDeath"
              value={simInfo.causeOfDeath}
              onChange={handleSingleSelectChange}
              options={data.causeOfDeath}
              renderInput={(params) => <TextField {...params} label="Cause of Death" />} />
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
