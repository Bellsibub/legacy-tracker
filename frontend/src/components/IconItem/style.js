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
    // height: 200,
    // [theme.breakpoints.down('xs')]: {
    //   width: '100% !important', // Overrides inline-style
    //   height: 100
    // },

    '&:hover': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15
      }
    }
  },
  // focusVisible: {},
  // imageButton: {
  //   position: 'absolute',
  //   left: 0,
  //   right: 0,
  //   top: 0,
  //   bottom: 0,
  //   display: 'flex',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   color: theme.palette.common.white
  // },
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
  // imageTitle: {
  //   position: 'relative',
  //   padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`
  // },
  imageMarked: {
    height: 'auto',
    display: 'flex',
    // width: 18,
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
