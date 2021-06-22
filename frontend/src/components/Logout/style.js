import {
  drawerWidth,
  boxShadow,
  defaultFont
} from 'assets/jss/globals';

export default (theme) => ({
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
      backgroundColor: theme.palette.action.hover,
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
  }
});
