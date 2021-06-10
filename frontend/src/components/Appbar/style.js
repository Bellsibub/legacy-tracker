import { appBarHeight } from 'assets/jss/globals';

export default () => ({
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
    flexGrow: 1
  }
});
