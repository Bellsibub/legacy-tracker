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

export default ({ legacyName, setlegacyName }) => {
  const classes = useStyles();
  const theme = useTheme();
  const dispatch = useDispatch();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
  // const [open, setOpen] = React.useState(false);
  const sessionData = useSelector((store) => store.session.data);
  const { name } = useSelector((store) => store.legacy);

  const handleChange = (event) => {
    const { target } = event;
    setlegacyName(target.value)
  };

  return (
    <>
      {/* <DialogTitle id="dialogEditSims">{title}</DialogTitle> */}
      {/* <DialogContent> */}
      {/* GENERAL */}
      <DialogTitle className={classes.dialogSectionTitle}>General</DialogTitle>
      <Divider className={classes.dialogDivider} />
      {/* name */}
      <TextInput
        value={legacyName}
        onChange={handleChange}
        label="Name"
        name="legacyName" />
      {/* <Traits value={simInfo.traits} onChange={handleTraitChange} items={packs} /> */}
      {/* <Aspirations value={simInfo.aspirations} onChange={handleAspirationChange} /> */}
    </>
  );
};
