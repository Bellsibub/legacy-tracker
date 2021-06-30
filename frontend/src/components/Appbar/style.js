import { appBarHeight } from 'assets/jss/globals';

export default (theme) => ({
  appBar: {
    position: 'absolute',
    zIndex: '1029',
    border: '0',
    minHeight: `${appBarHeight}px`,
    display: 'block'
  },
  toolbar: {
    minHeight: `${appBarHeight}px`
  },
  appBarContent: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    '& > h6': {
      marginLeft: theme.spacing(2)
    }
  }
});
