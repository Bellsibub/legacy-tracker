export const validateTraitSelection = (selection, traits) => {
  const adultTraits = traits.filter((trait) => trait.type === 'adult');
  const toddlersTraits = traits.filter((trait) => trait.type === 'toddler');
  return (
    (adultTraits.length >= 3 && selection.type === 'adult')
    || (toddlersTraits.length >= 1 && selection.type === 'toddler')
  );
};

export const formatString = (str) => {
  let i;
  const frags = str.split('_');
  for (i = 0; i < frags.length; i++) {
    if (frags[i] !== 'and' || frags[i] !== 'of' || frags[i] !== 'the') {
      frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
  }
  return frags.join(' ');
};
