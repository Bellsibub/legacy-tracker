import _ from 'lodash';

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

export const filterByPack = (items, packs) => {
  packs = _.filter(packs, ['active', true]);
  items = _.filter(items, (item) => {
    let st;
    _.forEach(packs, (pack) => {
      if (pack.name === item.pack) {
        st = true;
        // pack matches so return out of loop
        return false;
      } else {
        st = false;
      }
    });
    return st;
  });
  return items;
};
