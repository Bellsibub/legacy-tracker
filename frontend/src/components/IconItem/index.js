import React from 'react';

import Items from './Items';
import Packs from './Packs';

export default ({ type, ...props }) => {
  return (
    <>
      {type === 'item' && <Items {...props} />}
      {type === 'pack' && <Packs {...props} />}
    </>
  );
};
