export default (theme) => ({
  stepper: {
    backgroundColor: 'transparent',
    padding: theme.spacing(2)
  },
  form: {
    padding: theme.spacing(2)
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& > button': {
      margin: theme.spacing(2)
    }
  },
  title: {
    textAlign: 'center',
    margin: theme.spacing(2)
  }
});
