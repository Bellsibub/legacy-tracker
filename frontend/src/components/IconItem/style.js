export default (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: theme.spacing(1),
    '& > p': {
      textAlign: 'center',
      marginTop: theme.spacing(1),
      height: '40px'
    }
  },
  image: {
    width: '70px',
    borderRadius: '50px',
    '&:hover': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      }
    },
    '& > img': {
      width: '70px',
      borderRadius: '50px',
      boxShadow: theme.shadows[5]
    }
  },
  imageBackdrop: {
    height: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.1,
    transition: theme.transitions.create('opacity')
  },
  imageMarked: {
    height: 'auto',
    display: 'flex',
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    borderRadius: '5px',
    '& svg': {
      color: theme.palette.accent.main
    }
  },
  imageFocused: {
    height: 'auto',
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'white',
    '& svg': {
      color: theme.palette.accent.main
    }
  },
  focused: {
    border: `1px solid ${theme.palette.accent.main}`
  }
});
