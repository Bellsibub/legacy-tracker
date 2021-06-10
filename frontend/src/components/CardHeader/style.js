export default (theme) => ({
  cardHeader: {
    padding: '0.75rem 1.25rem',
    zIndex: '3 !important'
  },
  primary: {
    '& $cardHeaderIcon, & $cardHeaderText': {
      backgroundColor: theme.palette.primary.main
    }
  },
  accent: {
    '& $cardHeaderIcon, & $cardHeaderText': {
      backgroundColor: theme.palette.accent.main
    }
  },
  cardHeaderIcon: {
    borderRadius: '3px',
    backgroundColor: theme.palette.primary.main,
    padding: '5px',
    marginTop: '-30px',
    float: 'left',
    position: 'relative',
    color: 'white',
    '& svg': {
      width: '36px',
      height: '36px',
      margin: '10px 10px 4px'
    }
  },
  cardHeaderText: {
    display: 'inline-block',
    borderRadius: '3px',
    backgroundColor: theme.palette.primary.main,
    padding: '15px',
    marginTop: '-30px'
  }
});
