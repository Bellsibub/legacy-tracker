/* eslint-disable no-unused-vars */
import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogConfirm from 'components/DialogConfirm';
import DialogEdit from 'components/DialogEdit';
import DialogSims from 'components/DialogSims';
import IconItem from 'components/IconItem';
import { ArrowUpward } from '@material-ui/icons';

import { Grid } from '@material-ui/core';

const testArray = ['test1', 'test2', 'test3'];
// const images = [
//   { url: aspirationImage1, title: 'Romance', checked: true },
//   { url: aspirationImage2, title: 'Smart', checked: false }
// ];
// const arrowIcon = ArrowUpward;
export default () => {
  return (
    <Grid container spacing={3}>
      {/* icon header */}
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="accent" stats icon={DashboardIcon}>
            <p className="cardCategory">SCORE</p>
            <h3 className="cardTitle">
              3 <small>points</small>
            </h3>
          </CardHeader>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="accent" stats icon={DashboardIcon}>
            <p className="cardCategory">SCORE</p>
            <h3 className="cardTitle">
              3 <small>points</small>
            </h3>
          </CardHeader>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={3}>
        <Card>
          <CardHeader color="accent" stats icon={DashboardIcon}>
            <p className="cardCategory">SCORE</p>
            <h3 className="cardTitle">
              3 <small>points</small>
            </h3>
          </CardHeader>
        </Card>
      </Grid>
      {/* text header with body and footer */}
      <Grid item lg={6} xs={12}>
        <Card>
          <CardHeader color="accent" text>
            <h3 className="cardTitle">Dialog Examples</h3>
            <h4 className="cardCategory">this is a subtitle</h4>
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
            <DialogEdit
              select
              title="Select new law"
              items={testArray}
              currentItem="test1"
              onConfirm={(value) => console.log(value)} />

            {/* dialog sims */}
            <DialogSims
              buttonText
              title="Edit this sim"
              onConfirm={(value) => console.log(value)} />
          </CardFooter>
        </Card>
      </Grid>
    </Grid>
  );
};
