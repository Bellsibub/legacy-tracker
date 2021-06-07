import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';

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
      {/* text header */}
      <Card>
        <CardHeader color="accent" text>
          <h3 className="cardTitle">This is a title</h3>
          <h4 className="cardCategory">this is a subtitle</h4>
        </CardHeader>
      </Card>
    </>
  );
};
