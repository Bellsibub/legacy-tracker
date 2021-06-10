import { drawerWidth, appBarHeight } from './globals';

export default (theme) => ({
  mainPanel: {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
    marginTop: `calc(15px + ${appBarHeight}px)`,
    padding: '15px',
    minHeight: `calc(100vh - ${appBarHeight}px - 30px)`
  }
});
