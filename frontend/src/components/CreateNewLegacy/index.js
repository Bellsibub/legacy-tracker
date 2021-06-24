import React from 'react';

// 3rd party components
import { EmojiEvents } from '@material-ui/icons';

// custom components
import Card from 'components/Card';
import CardHeader from 'components/CardHeader';
import CardBody from 'components/CardBody';
import Stepper from 'components/Stepper';

export default () => {
  return (
    <Card>
      <CardHeader color="blue" icon={EmojiEvents} />
      <CardBody>
        <Stepper />
      </CardBody>
    </Card>
  );
};
