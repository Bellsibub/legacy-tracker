import React from 'react';
import _ from 'lodash';
import { useHistory } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

// 3rd party components
import {
  Stepper,
  useTheme,
  useMediaQuery,
  Step,
  StepLabel,
  Button,
  Typography
} from '@material-ui/core';

// custom components
import DialogConfirm from 'components/DialogConfirm';
// services
import { initLegacy } from 'store/legacy/services';
// local components
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import styles from './style';

const useStyles = makeStyles(styles);

const getSteps = () => {
  return [
    {
      label: 'Packs/Expansions',
      title: 'Select the packs you want active for this legacy',
      help: 'You can change this later 😃'
    },
    {
      label: 'Founder',
      title: 'Who is the founder?',
      help: "Don't worry you can change this later"
    },
    {
      label: 'Laws',
      title: 'Select the laws for the legacy',
      help: 'Guess what, you can change this later!'
    },
    {
      label: 'Name',
      title: 'Finally select the name of the legacy',
      help: "This can't be changed! ⚠️"
    }
  ];
};

const defaultValues = {
  generation: 1,
  role: {
    text: 'Founder',
    legacy: true,
    runningForRuler: false,
    eligible: false
  },
  status: 'Alive, in legacy household'
};

export default () => {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const theme = useTheme();
  const { getAccessTokenSilently } = useAuth0();
  const availablePacks = useSelector((store) => store.session.data.packs);
  const smallScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const [simInfo, setSimInfo] = React.useState({ ...defaultValues });
  const [legacyName, setLegacyName] = React.useState('');
  const [packs, setPacks] = React.useState(availablePacks);
  const [laws, setLaws] = React.useState({});
  const [activeStep, setActiveStep] = React.useState(0);
  const [errors, setErrors] = React.useState([]);
  const steps = getSteps();
  const myForm = React.useRef(null);

  const isStepFailed = (index) => {
    return _.includes(errors, index);
  };

  const handleNext = () => {
    if (!myForm.current.checkValidity()) {
      setErrors((prevState) => [...prevState, activeStep]);
    } else {
      setErrors(errors.filter((err) => err !== activeStep));
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    if (!myForm.current.checkValidity()) {
      setErrors((prevState) => [...prevState, activeStep]);
    } else {
      setErrors(errors.filter((err) => err !== activeStep));
    }
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleFinish = () => {
    getAccessTokenSilently().then((token) => {
      dispatch(
        initLegacy({
          founder: simInfo,
          legacy: { laws, packs, name: legacyName },
          token
        })
      );
      history.push('/dashboard');
    });
  };
  const handleSetPacks = (id) => {
    setPacks(packs.map((item) => (item._id === id ? { ...item, active: true } : item)));
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <Step1 items={packs} setPacks={handleSetPacks} />;
      case 1:
        return <Step2 simInfo={simInfo} setSimInfo={setSimInfo} packs={packs} />;
      case 2:
        return <Step3 packs={packs} setLaws={setLaws} />;
      case 3:
        return <Step4 legacyName={legacyName} setlegacyName={setLegacyName} />;
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
            <Step key={label.label}>
              <StepLabel {...labelProps}>{!smallScreen ? label.label : ''}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <form ref={myForm} className={classes.form}>
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
            {activeStep === steps.length - 1 ? (
              <DialogConfirm
                color="accent"
                disabled={errors.length > 0 || legacyName.length <= 0}
                title="Start new legacy"
                buttonText="Start Legacy"
                message={`Do you want initiate the ${legacyName} legacy`}
                onConfirm={handleFinish} />
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext}>
                Next
              </Button>
            )}
          </div>
        </>
      </form>
    </>
  );
};
