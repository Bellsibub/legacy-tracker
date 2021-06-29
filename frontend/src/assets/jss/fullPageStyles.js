
import { drawerWidth, appBarHeight } from './globals';

export default (theme) => ({
  mainPanel: {
    position: "absolute",
    top: "50%",
    left: "50%",
    zIndex: "3",
    transform: "translate(-50%,-50%)",
    textAlign: "center",
    color: theme.palette.common.white,
    padding: "0 15px",
    width: "100%",
    maxWidth: "880px"
  },
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
  },
  title: {
    fontSize: "13.7em",
    letterSpacing: "14px",
    fontWeight: "700"
  },
  subTitle: {
    fontSize: "2.25rem",
    marginTop: "0",
    marginBottom: "8px"
  },
  description: {
    fontSize: "1.125rem",
    marginTop: "0",
    marginBottom: "8px"
  },
  content: {
    // marginTop: `calc(15px + ${appBarHeight}px)`,
    // padding: '15px',
    // minHeight: `calc(100vh - ${appBarHeight}px - 30px)`
  }
});
