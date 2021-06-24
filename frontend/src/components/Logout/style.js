export default (theme) => ({
  itemLink: {
    transition: 'all .5s ease-in-out',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textDecoration: 'none',
    width: '100%',
    '&:hover': {
      outline: 'none',
      backgroundColor: theme.palette.action.hover,
      boxShadow: 'none'
    },
    '&,&:hover,&:focus': {
      color: 'inherit'
    }
  },
  itemIcon: {
    margin: '0 10px'
  },
  itemText: {
    lineHeight: '30px',
    transform: 'translate3d(0px, 0, 0)',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s'
  }
});
