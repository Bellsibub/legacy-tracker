import React from 'react';

import { ArrowUpward } from '@material-ui/icons';
import { Grid, Typography } from '@material-ui/core';

import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogConfirm from 'components/DialogConfirm';
import DialogEdit from 'components/DialogEdit';
import Ruler from 'components/Ruler';
// import Heir from 'components/Heir';

export default () => {
  return (
    <Grid container spacing={3}>
      {/* Ruler */}
      <Grid item lg={6} md={9} sm={9} xs={12}>
        <Ruler />
      </Grid>
      <Grid item lg={6} xs={12}>
        <Card>
          <CardHeader color="accent" text>
            <Typography variant="h3">Dialog Examples</Typography>
          </CardHeader>
          <CardBody>
            {/* Example of how use DialogItemAction & Icon Item */}
            {/* {images.map((image) => (
              <IconItem key={image.title} {...image} />
            ))} */}
          </CardBody>
          <CardFooter>
            {/* confirm with iconbutton */}
            <DialogConfirm
              icon={ArrowUpward}
              color="secondary"
              title="Create new legacy"
              message="Are you sure you want to do this?"
              onConfirm={() => console.log('hello')} />

            {/* confirm with textbutton */}
            <DialogConfirm
              buttonText="Action text"
              title="Create new legacy"
              message="Are you sure you want to do this?"
              onConfirm={() => console.log('hello')} />

            {/* edit with text field */}
            <DialogEdit
              text
              title="Edit the law"
              label="Law text"
              currentItem="mylaw"
              onConfirm={(value) => console.log(value)} />

            {/* edit with select */}
            {/* <DialogEdit
              select
              title="Select new law"
              items={testArray}
              currentItem="test1"
              onConfirm={(value) => console.log(value)} /> */}
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
};
