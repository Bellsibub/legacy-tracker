import { drawerWidth, appBarHeight, containerFluid } from './globals';

export default (theme) => ({
  wrapper: {
    position: 'relative',
    top: '0',
    height: '100vh',
    '&:after': {
      display: 'table',
      clear: 'both',
      content: '" "'
    }
  },
  mainPanel: {
    // transitionProperty: 'top, bottom, width',
    // transitionDuration: '.2s, .2s, .35s',
    // transitionTimingFunction: 'linear, linear, ease',
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`
    },
    overflow: 'auto',
    position: 'relative',
    float: 'right',
    // ...transition,
    maxHeight: '100%',
    width: '100%',
    overflowScrolling: 'touch'
  },
  content: {
    marginTop: `calc(15px + ${appBarHeight}px)`,
    padding: '15px',
    minHeight: `calc(100vh - ${appBarHeight}px - 30px)`
  },
  container: { ...containerFluid }
});
