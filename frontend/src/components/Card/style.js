import {
  softBoxShadow
} from 'assets/jss/globals';

export default (theme) => ({
  card: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2),
    borderRadius: '6px',
    color: theme.palette.text.primary,
    background: theme.palette.background.default,
    width: '100%',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '0',
    wordWrap: 'break-word',
    ...softBoxShadow
  }
});
