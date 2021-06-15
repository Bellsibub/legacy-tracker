export default (theme) => ({
  focusToggle: {
    justifyContent: 'center',
    margin: 0
  },
  checkedColor: {
    color: theme.palette.accent.main
  },
  unCheckedColor: {
    color: theme.palette.text.secondary
  },
  completed: {
    backgroundColor: theme.palette.accent.light,
    textDecoration: 'line-through',
    opacity: '0.8 !important'
  }
});
