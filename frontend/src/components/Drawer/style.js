import { drawerWidth, boxShadow, defaultFont } from 'assets/jss/globals';

export default (theme) => ({
  drawer: {
    border: 'none',
    ...boxShadow,
    color: 'white',
    background: theme.palette.secondary.main,
    [theme.breakpoints.up('md')]: {
      width: drawerWidth
    },
    [theme.breakpoints.down('sm')]: {
      width: drawerWidth
    }
  },
  drawerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh'
  },
  list: {
    flexGrow: 1
  },
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
  },
  activeLink: {
    '&,&:hover,&:focus': {
      color: 'white',
      backgroundColor: theme.palette.primary.main
    }
  },
  profileHeader: {
    display: 'flex',
    alignItems: 'center'
  },
  photo: {
    width: '34px',
    height: '34px',
    overflow: 'hidden',
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
    letterSpacing: '1px'
  }
});
