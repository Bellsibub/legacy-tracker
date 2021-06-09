export const validateTraitSelection = (selection, traits) => {
  const adultTraits = traits.filter((trait) => trait.type === 'adult');
  const toddlersTraits = traits.filter((trait) => trait.type === 'toddler');
  return (
    (adultTraits.length >= 3 && selection.type === 'adult')
    || (toddlersTraits.length >= 1 && selection.type === 'toddler')
  );
};