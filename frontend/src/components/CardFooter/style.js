export default (theme) => ({
  cardFooter: {
    padding: '10px',
    margin: '0 15px 10px',
    justifyContent: 'flex-end',
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginRight: theme.spacing(1),
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  },
  hasBorder: {
    borderTop: `1px solid ${theme.palette.divider}`
  }
});
