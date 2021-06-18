import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from './Step1';
import Step2 from './Step2';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  }
}));

const getSteps = () => {
  return [
    'Select master blaster campaign settings',
    'Create an ad group',
    'Create an ad',
    'lkl'
  ];
};

const defaultValues = {
  generation: 1,
  role: 'Founder',
  status: 'Alive, in legacy household'
  // lastName: newGen ? name : ''
};

export default () => {
  const classes = useStyles();

  const [simInfo, setSimInfo] = React.useState({ ...defaultValues });
  const [packs, setPacks] = React.useState([]);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 packs={packs} setPacks={setPacks} />;
      case 1:
        return <Step2 simInfo={simInfo} setSimInfo={setSimInfo} packs={packs} />;
      case 2:
        return <div>hello2</div>;
      case 3:
        return <div>hello2</div>;
      default:
        return <div>unknown index</div>;
    }
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
