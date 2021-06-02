import {
  containerFluid,
  defaultFont,
  primaryColor,
  whiteColor,
  appBarHeight
} from 'assets/jss/globals';

export default () => ({
  appBar: {
    backgroundColor: primaryColor[1],
    // boxShadow: 'none',
    marginBottom: '0',
    position: 'absolute',
    // width: '100%',
    zIndex: '1029',
    color: whiteColor,
    border: '0',
    padding: '10px 0',
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
