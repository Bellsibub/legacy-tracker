import {
  containerFluid,
  defaultFont,
  // primaryColor,
  // whiteColor,
  appBarHeight
} from 'assets/jss/globals';

export default (theme) => ({
  appBar: {
    backgroundColor: theme.palette.primary.main,
    // boxShadow: 'none',
    position: 'absolute',
    // width: '100%',
    zIndex: '1029',
    color: 'white',
    border: '0',
    transition: 'all 150ms ease 0s',
    minHeight: `${appBarHeight}px`,
    display: 'block'
  },
  container: {
    ...containerFluid,
    minHeight: `${appBarHeight}px`
  },
  flex: {
    flexGrow: 1
  },
  title: {
    ...defaultFont,
    lineHeight: '30px',
    fontSize: '26px',
    color: 'inherit',
    paddingTop: '0.625rem',
    paddingBottom: '0.625rem',
    margin: '0 !important',
    letterSpacing: 'unset',
    '&:hover,&:focus': {
      background: 'transparent'
    }
  }
});
