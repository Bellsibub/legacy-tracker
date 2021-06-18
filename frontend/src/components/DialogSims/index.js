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
  Button,
  IconButton,
  Divider,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import { Edit } from '@material-ui/icons';
// styling
import dialog from 'assets/jss/dialog';
// custom components
import Aspirations from 'components/Inputs/SelectAspirations';
import Species from 'components/Inputs/SelectSpecies';
import Traits from 'components/Inputs/SelectTraits';
import CauseOfDeath from 'components/Inputs/SelectCod';
import Status from 'components/Inputs/SelectStatus';
import Roles from 'components/Inputs/SelectRole';
import Relations from 'components/Inputs/SelectRelations';
import TextInput from 'components/Inputs/TextInput';
import SimpleSelect from 'components/Inputs/SimpleSelect';
import SwitchToggle from 'components/Inputs/SwitchToggle';

const useStyles = makeStyles(dialog);

export default ({
  title,
  buttonText,
  buttonIcon,
  currentItem,
  onConfirm,
  newGen,
  generation,
  disabled
}) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = React.useState(false);
  const sessionData = useSelector((store) => store.session.data);
  const { name } = useSelector((store) => store.legacy);
  const generations = useSelector((store) => _.groupBy(store.legacy.sims, 'generation'));
  const generationOpts = _.keys(generations);
  const defaultValues = {
    relations: {},
    generation,
    lastName: newGen ? name : ''
  };

  const [simInfo, setSimInfo] = React.useState(currentItem || { ...defaultValues });

  React.useEffect(() => {
    setSimInfo(currentItem || { ...defaultValues });
    console.log(simInfo);
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
        <IconButton disabled={disabled} color="primary" onClick={toggleDialog}>
          <Edit />
        </IconButton>
      )}
      {buttonText && (
        <Button disabled={disabled} variant="contained" color="primary" onClick={toggleDialog}>
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
              value={simInfo.adopted}
              onChange={handleChange}
              label="Adopted" />
            {/* species */}
            <Species value={simInfo.species} onChange={handleSingleSelectChange} />
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
              generation={simInfo.generation}
              newGen={newGen || false}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.father}
              label="Father"
              onChange={handleRelationChange}
              generation={simInfo.generation}
              newGen={newGen || false}
              currentSimID={simInfo._id} />
            <Relations
              value={simInfo.relations.spouse}
              label="Spouse"
              onChange={handleRelationChange}
              generation={simInfo.generation}
              newGen={newGen || false}
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
