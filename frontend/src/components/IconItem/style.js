export default (theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    position: 'relative',
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
  }
});
