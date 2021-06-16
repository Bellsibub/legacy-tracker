export default (theme) => ({
  focusButton: {
    backgroundColor: theme.palette.accent.main,
    color: 'white'
  },
  listItem: {
    display: 'flex',
    '& > li': {
      position: 'unset'
    }
  }
});
