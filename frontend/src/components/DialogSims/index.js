import React from 'react';
import _ from 'lodash';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  IconButton,
  Divider,
  DialogContentText
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';

// custom components
import Species from 'components/Inputs/SelectSpecies';
import Traits from 'components/Inputs/SelectTraits';
import CauseOfDeath from 'components/Inputs/SelectCod';
import Status from 'components/Inputs/SelectStatus';
import Relations from 'components/Inputs/SelectRelations';
import TextInput from 'components/Inputs/TextInput';
import SimpleSelect from 'components/Inputs/SimpleSelect';
import SwitchToggle from 'components/Inputs/SwitchToggle';

// styling
import dialog from 'assets/jss/dialog';

const useStyles = makeStyles(dialog);

export default ({ title, buttonText, buttonIcon, generation, onConfirm, ...other }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { name } = useSelector((store) => store.legacy);
  const role = { ...other.roleType };
  const defaultValues = {
    role,
    relations: {},
    generation,
    lastName: role.legacy ? name : ''
  };

  const [simInfo, setSimInfo] = React.useState(other.currentItem || { ...defaultValues });

  React.useEffect(() => {
    setSimInfo(other.currentItem || { ...defaultValues });
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
    const { target } = event;
    setSimInfo((prevState) => ({
      ...prevState,
      [target.name]: target.checked || target.value
    }));
  };
  const handleToggle = (event) => {
    const { target } = event;
    setSimInfo((prevState) => ({
      ...prevState,
      adopted: target.checked
    }));
  };
  const handleTraitChange = (event, newValue) => {
    setSimInfo((prevState) => ({
      ...prevState,
      traits: [...newValue]
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
        <IconButton disabled={other.disabled} color="primary" onClick={toggleDialog}>
          <Edit />
        </IconButton>
      )}
      {buttonText && (
        <Button
          disabled={other.disabled}
          variant="contained"
          color="primary"
          onClick={toggleDialog}>
          {typeof buttonText === 'string' ? buttonText : 'edit'}
        </Button>
      )}
      <Dialog
        open={open}
        onClose={toggleDialog}
        aria-labelledby="dialogEditSims"
        className={classes.dialog}>
        <form onSubmit={handleSubmit}>
          <DialogTitle id="dialogEditSims">{title}</DialogTitle>
          <DialogContent>
            <DialogContentText>{other.description}</DialogContentText>
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
            <SwitchToggle
              value={simInfo.adopted || false}
              onChange={handleToggle}
              label="Adopted" />
            {/* species */}
            <Species value={simInfo.species} onChange={handleSingleSelectChange} />
            {/* TRAITS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Traits and Aspirations
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
            <Traits value={simInfo.traits} onChange={handleTraitChange} />
            {/* RELATIONS */}
            <DialogTitle className={classes.dialogSectionTitle}>Relations</DialogTitle>
            <Divider className={classes.dialogDivider} />
            <Relations
              value={simInfo.relations.mother}
              label="Mother"
              onChange={handleRelationChange}
              generation={simInfo.generation}
              newGen={other.newGen || false}
              required={simInfo.role.text !== 'Founder'}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.father}
              label="Father"
              onChange={handleRelationChange}
              generation={simInfo.generation}
              newGen={other.newGen || false}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.partner}
              label="Partner"
              onChange={handleRelationChange}
              generation={simInfo.generation}
              newGen={other.newGen || false}
              currentSimID={simInfo._id} />
            {/* LEGACY STATUS */}
            <DialogTitle className={classes.dialogSectionTitle}>
              Legacy status
            </DialogTitle>
            <Divider className={classes.dialogDivider} />
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
