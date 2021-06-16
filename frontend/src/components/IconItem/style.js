export default (theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    margin: theme.spacing(2)
  },
  image: {
    '& > *': {
      borderRadius: '5px'
    },

    '&:hover': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      }
    }
  },
  imageBackdrop: {
    height: 'auto',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
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
    borderRadius: '5px',
    '& svg': {
      color: theme.palette.accent.main
    }
  },
  focused: {
    border: `1px solid ${theme.palette.accent.main}`
  }
});
