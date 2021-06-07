import {
  // whiteColor,
  // blackColor,
  // hexToRgb,
  softBoxShadow
} from 'assets/jss/globals';

export default (theme) => ({
  card: {
    border: '0',
    marginBottom: '30px',
    marginTop: '30px',
    borderRadius: '6px',
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    width: '100%',
    ...softBoxShadow,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    fontSize: '.875rem'
  }
});
