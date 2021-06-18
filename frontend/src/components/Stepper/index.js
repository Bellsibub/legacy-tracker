import React from 'react';
import _ from 'lodash';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Step1 from './Step1';
import Step2 from './Step2';

import styles from './style';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%'
//   },
//   backButton: {
//     marginRight: theme.spacing(1)
//   },
//   instructions: {
//     marginTop: theme.spacing(1),
//     marginBottom: theme.spacing(1)
//   }
// }));
const useStyles = makeStyles(styles);

const getSteps = () => {
  return [
    {
      label: 'Packs/Expansions',
      title: 'Select the packs you want active for this legacy'
    },
    {
      label: 'Founder',
      title: 'Who is the founder?',
      help: "Don't worry you can change this later"
    },
    { label: 'Laws', title: '' },
    { label: 'Name', title: '' }
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
  const [errors, setErrors] = React.useState([]);
  const steps = getSteps();
  const myForm = React.useRef(null);

  const isStepFailed = (index) => {
    return _.includes(errors, index);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // toggleDialog();
    // onConfirm(simInfo);
  };

  const handleNext = (event) => {
    if (!myForm.current.checkValidity()) {
      // return;
      setErrors((prevState) => [...prevState, activeStep]);
    }
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
    <>
      <Stepper className={classes.stepper} activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const labelProps = {};
          if (isStepFailed(index)) {
            labelProps.error = true;
          }
          return (
            <Step key={label}>
              <StepLabel {...labelProps}>{label.label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form ref={myForm} onSubmit={handleSubmit} className={classes.form}>
        {activeStep === steps.length ? (
          <>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </>
        ) : (
          <>
            <Typography className={classes.title} variant="h4" color="primary">
              {steps[activeStep].title}
            </Typography>
            <Typography className={classes.title} variant="h5" color="primary">
              {steps[activeStep].help}
            </Typography>
            {getStepContent(activeStep)}
            <div className={classes.buttons}>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </>
        )}
      </form>
    </>
  );
};
