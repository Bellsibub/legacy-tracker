export default (theme) => ({
  dialogFullWidth: {
    width: '100%',
    margin: '8px 0 4px 0'
  },
  dialogMultiSelect: {
    marginTop: '25px'
  },
  dialogDivider: {
    margin: '10px 0'
  },
  dialogSectionTitle: {
    marginTop: '25px',
    paddingLeft: 0,
    paddingBottom: 0
  },
  buttonAccent: {
    backgroundColor: theme.palette.accent.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.accent.dark
    }
  },
  buttonWarning: {
    backgroundColor: theme.palette.warning.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.warning.dark
    }
  },
  buttonPrimary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark
    }
  },
  item: {},
  isSelected: {
    border: `1px solid ${theme.palette.accent.main}`,
    borderRadius: '5px'
  }
});
