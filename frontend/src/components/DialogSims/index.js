/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React from 'react';
import _ from 'lodash';
import { useSelector, useDispatch } from 'react-redux';
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
import Aspirations from './Inputs/SelectAspirations';
import Species from './Inputs/SelectSpecies';
import Traits from './Inputs/SelectTraits';
import CauseOfDeath from './Inputs/SelectCod';
import Status from './Inputs/SelectStatus';
import Roles from './Inputs/SelectRole';
import Relations from './Inputs/SelectRelations';
import TextInput from './Inputs/TextInput';
import SimpleSelect from './Inputs/SimpleSelect';
import SwitchToggle from './Inputs/SwitchToggle';

const useStyles = makeStyles(dialog);

export default ({ title, buttonText, buttonIcon, currentItem, onConfirm, newGen }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const sessionData = useSelector((store) => store.session.data);
  const generation = useSelector((store) => store.legacy.generation);
  const generations = useSelector((store) => _.groupBy(store.legacy.sims, 'generation'));
  const generationOpts = useSelector((store) => {
    const opts = _.keys(generations);
    if (newGen) {
      opts.push(generation + 1);
    }
    return opts;
  });

  const defaultValues = {
    relations: {},
    generation: newGen ? generation + 1 : generation
  };

  const [open, setOpen] = React.useState(false);
  const [simInfo, setSimInfo] = React.useState(currentItem || { ...defaultValues });

  React.useEffect(() => {
    setSimInfo(currentItem || { ...defaultValues });
  }, [open]);

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
        aria-labelledby="dialogEditSims"
        className={classes.dialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="dialogEditSims">{title}</DialogTitle>
          <DialogContent>
            {/* Generation */}
            <FormControl required className={classes.dialogFullWidth}>
              <InputLabel id="generation">Generation</InputLabel>
              <Select
                labelId="generation"
                id="generationSelect"
                name="generation"
                value={simInfo.generation || 1}
                onChange={handleChange}
                input={<Input />}>
                {generationOpts.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography variant="body1">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {/* GENERAL */}
            <DialogTitle className={classes.dialogSectionTitle}>General</DialogTitle>
            <Divider className={classes.dialogDivider} />
            {/* name */}
            <TextInput
              value={simInfo.firstName}
              onChange={handleChange}
              label="First Name"
              name="firstName" />
            <TextInput
              value={simInfo.lastName}
              onChange={handleChange}
              label="Last Name"
              name="lastName" />
            {/* Gender */}
            <SimpleSelect value={simInfo.gender} onChange={handleChange} label="Gender" />
            {/* is adopted */}
            <SwitchToggle value={simInfo.adopted} onChange={handleChange} label="Adopted" />
            {/* species */}
            <Species value={simInfo.species} onChange={handleSingleSelectChange} />
            {/* <FormControl required className={classes.dialogFullWidth}>
              <InputLabel id="species">Species</InputLabel>
              <Select
                labelId="species"
                id="speciesSelect"
                name="species"
                value={simInfo.species || ''}
                onChange={handleChange}
                input={<Input />}>
                {data.species.map((item) => (
                  <MenuItem key={item} value={item}>
                    <Typography variant="body1">{item}</Typography>
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            {/* TRAITS and ASPIRATIONS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Traits and Aspirations
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
            <Traits value={simInfo.traits} onChange={handleTraitChange} />
            <Aspirations value={simInfo.aspirations} onChange={handleAspirationChange} />
            {/* RELATIONS */}
            <DialogTitle className={classes.dialogSectionTitle}>Relations</DialogTitle>
            <Divider className={classes.dialogDivider} />
            <Relations
              value={simInfo.relations.mother}
              label="Mother"
              onChange={handleRelationChange}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.father}
              label="Father"
              onChange={handleRelationChange}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.spouse}
              label="Spouse"
              onChange={handleRelationChange}
              currentSimID={simInfo._id} />
            {/* LEGACY STATUS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Legacy status
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
            {/* Role */}
            <Roles value={simInfo.role} onChange={handleSingleSelectChange} />
            {/* Status */}
            <Status value={simInfo.status} onChange={handleSingleSelectChange} />
            {/* Cause of Death */}
            <CauseOfDeath
              value={simInfo.causeOfDeath}
              onChange={handleSingleSelectChange} />
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
