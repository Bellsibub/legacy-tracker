import {
  drawerWidth,
  transition,
  boxShadow,
  defaultFont,
  primaryColor,
  primaryBoxShadow,
  infoColor,
  whiteColor,
  grayColor,
  hexToRgb
} from 'assets/jss/globals';

export default (theme) => ({
  drawer: {
    border: 'none',
    position: 'fixed',
    top: '0',
    bottom: '0',
    left: '0',
    zIndex: '1032',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    ...boxShadow,
    color: whiteColor,
    background: infoColor[0],
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      position: 'fixed',
      height: '100%'
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth,
      ...boxShadow,
      position: 'fixed',
      display: 'block',
      top: '0',
      height: '100vh',
      right: '0',
      left: 'auto',
      zIndex: '1032',
      visibility: 'visible',
      overflowY: 'visible',
      borderTop: 'none',
      textAlign: 'left',
      paddingRight: '0px',
      paddingLeft: '0',
      transform: `translate3d(${drawerWidth}px, 0, 0)`,
      ...transition
    },
    '&:before,&:after': {
      position: 'absolute',
      zIndex: '3',
      width: '100%',
      height: '100%',
      content: '""',
      display: 'block',
      top: '0'
    }
  },
  drawerWrapper: {
    position: 'relative',
    height: 'calc(100vh - 75px)',
    overflow: 'auto',
    width: '260px',
    zIndex: '4',
    overflowScrolling: 'touch',
    transitionProperty: 'top, bottom, width',
    transitionDuration: '.2s, .2s, .35s',
    transitionTimingFunction: 'linear, linear, ease',
    color: 'inherit',
    paddingBottom: '30px'
  },
  list: {
    marginTop: '15px',
    paddingLeft: '0',
    paddingTop: '0',
    paddingBottom: '0',
    marginBottom: '0',
    listStyle: 'none',
    color: 'inherit',
    '&:before,&:after': {
      display: 'table',
      content: '" "'
    },
    '&:after': {
      clear: 'both'
    }
  },
  itemLink: {
    paddingLeft: '10px',
    paddingRight: '10px',
    transition: 'all 300ms linear',
    margin: '10px 15px 0',
    borderRadius: '3px',
    position: 'relative',
    display: 'block',
    padding: '10px 15px',
    backgroundColor: 'transparent',
    ...defaultFont,
    width: 'auto',
    '&:hover': {
      outline: 'none',
      backgroundColor: `rgba(${hexToRgb(grayColor[17])}, 0.8)`,
      boxShadow: 'none'
    },
    '&,&:hover,&:focus': {
      color: 'inherit'
    }
  },
  itemIcon: {
    color: 'inherit',
    width: '30px',
    height: '24px',
    float: 'left',
    position: 'inherit',
    top: '3px',
    marginRight: '15px',
    textAlign: 'center',
    verticalAlign: 'middle',
    opacity: '0.8'
  },
  itemText: {
    color: 'inherit',
    ...defaultFont,
    margin: '0',
    lineHeight: '30px',
    fontSize: '14px',
    transform: 'translate3d(0px, 0, 0)',
    opacity: '1',
    transition: 'transform 300ms ease 0s, opacity 300ms ease 0s',
    position: 'relative',
    display: 'block',
    height: 'auto',
    whiteSpace: 'nowrap',
    padding: '0 16px !important'
  },
  item: {
    color: 'inherit',
    position: 'relative',
    display: 'block',
    textDecoration: 'none',
    margin: '0',
    padding: '0'
  },
  activeLink: {
    '&,&:hover,&:focus': {
      color: whiteColor,
      backgroundColor: primaryColor[0],
      ...primaryBoxShadow
    }
  }
});
