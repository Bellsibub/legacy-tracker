import React from 'react';

import { Avatar, Chip, Grid } from '@material-ui/core';

export default ({ items }) => {
  return (
    <Grid container direction="row" alignItems="center" spacing={1}>
      {items.map((item) => (
        <Grid item key={item._id}>
          <Chip
            label={item.name}
            variant="outlined"
            color="primary"
            avatar={<Avatar src={item.image} />} />
        </Grid>
      ))}
    </Grid>
  );
};
