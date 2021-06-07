import {
  drawerWidth,
  // transition,
  boxShadow,
  defaultFont,
  primaryColor,
  secondaryColor,
  whiteColor,
  grayColors,
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
    // transitionProperty: 'top, bottom, width',
    // transitionDuration: '.2s, .2s, .35s',
    // transitionTimingFunction: 'linear, linear, ease',
    ...boxShadow,
    color: whiteColor,
    background: secondaryColor,
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
      transform: `translate3d(${drawerWidth}px, 0, 0)`
      // ...transition
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
      backgroundColor: `rgba(${hexToRgb(grayColors[17])}, 0.8)`,
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
      backgroundColor: primaryColor
    }
  },
  logo: {
    padding: '15px 0px',
    margin: '0',
    display: 'block',
    position: 'relative',
    zIndex: '4',
    '&:after': {
      content: '""',
      position: 'absolute',
      bottom: '0',
      height: '1px',
      right: '15px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'hsla(0,0%,100%,.3)'
    }
  },
  logoNormal: {
    ...defaultFont,
    transition: 'all 300ms linear',
    display: 'block',
    opacity: '1',
    transform: 'translate3d(0px, 0, 0)',
    textTransform: 'uppercase',
    padding: '5px 0px',
    fontSize: '18px',
    whiteSpace: 'nowrap',
    fontWeight: '400',
    lineHeight: '30px',
    overflow: 'hidden',
    '&,&:hover,&:focus': {
      color: 'inherit'
    }
  },
  profile: {
    padding: '30px 0 15px 0',
    margin: '20px auto 0',
    bottom: '0',
    position: 'absolute',
    width: '100%',
    '&:before': {
      content: '""',
      position: 'absolute',
      top: '0',
      right: '15px',
      height: '1px',
      width: 'calc(100% - 30px)',
      backgroundColor: 'hsla(0,0%,100%,.3)'
    }
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center'

  },
  photo: {
    transition: 'all 300ms linear',
    width: '34px',
    height: '34px',
    overflow: 'hidden',
    float: 'left',
    zIndex: '5',
    marginRight: '11px',
    borderRadius: '50%',
    marginLeft: '23px',
    ...boxShadow
  },
  avatarImg: {
    width: '100%',
    verticalAlign: 'middle',
    border: '0'
  },
  profileName: {
    textTransform: 'uppercase'
  }
});
