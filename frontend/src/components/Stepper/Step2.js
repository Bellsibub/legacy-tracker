import React from 'react';

// 3rd party components
import { Container } from '@material-ui/core';
// custom components
import Species from 'components/Inputs/SelectSpecies';
import TextInput from 'components/Inputs/TextInput';
import SimpleSelect from 'components/Inputs/SimpleSelect';

export default ({ simInfo, setSimInfo, packs }) => {
  const handleChange = (event) => {
    const { target } = event;
    setSimInfo((prevState) => ({
      ...prevState,
      [target.name]: target.checked || target.value
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
    <Container maxWidth="xs">
      {/* name */}
      <TextInput
        value={simInfo.firstName}
        onChange={handleChange}
        label="First Name"
        name="firstName"
        required />
      <TextInput
        value={simInfo.lastName}
        onChange={handleChange}
        label="Last Name"
        name="lastName"
        required />
      {/* Gender */}
      <SimpleSelect value={simInfo.gender} onChange={handleChange} label="Gender" />
      {/* species */}
      <Species
        value={simInfo.species}
        onChange={handleSingleSelectChange}
        packs={packs} />
    </Container>
  );
};
