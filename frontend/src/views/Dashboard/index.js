import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import CardFooter from 'components/CardFooter';
import DialogConfirm from 'components/DialogConfirm';
import DialogEdit from 'components/DialogEdit';
// import DialogItemActions from 'components/DialogItemActions';
import IconItem from 'components/IconItem';
import { ArrowUpward } from '@material-ui/icons';
import aspirationImage1 from 'assets/img/Aspiration1.png';
import aspirationImage2 from 'assets/img/Aspiration2.png';
// import DialogEditText from 'components/DialogEditText';
// import DialogEditSelect from 'components/DialogEditSelect';
// import { Button } from '@material-ui/core';
// import { Typography } from '@material-ui/core';

const testArray = ['test1', 'test2', 'test3'];
const images = [
  { url: aspirationImage1, title: 'Romance', checked: true },
  { url: aspirationImage2, title: 'Smart', checked: false }
];
// const arrowIcon = ArrowUpward;
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
          {/* Example of how use DialogItemAction & Icon Item */}
          {images.map((image) => (
            <IconItem key={image.title} {...image} />
          ))}
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
        </CardFooter>
      </Card>
    </>
  );
};
