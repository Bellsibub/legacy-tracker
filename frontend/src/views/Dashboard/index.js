import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import { Button } from '@material-ui/core';
// import { Typography } from '@material-ui/core';

export default () => {
  return (
    <>
      {/* icon header */}
      <Card>
        <CardHeader color="accent" stats icon={DashboardIcon}>
          <p className="cardCategory">SCORE</p>
          <h3 className="cardTitle">
            3 <small>points</small>
          </h3>
        </CardHeader>
      </Card>
      {/* text header with body and footer */}
      <Card>
        <CardHeader color="accent" text>
          <h3 className="cardTitle">This is a title</h3>
          <h4 className="cardCategory">this is a subtitle</h4>
        </CardHeader>
        <CardBody>
          <p>hello</p>
        </CardBody>
        <CardFooter>
          <Button variant="contained" color="primary">test</Button>
        </CardFooter>
      </Card>
    </>
  );
};
