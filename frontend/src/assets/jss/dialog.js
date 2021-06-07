export default (theme) => ({
  dialog: {
    [theme.breakpoints.up("sm")]: {
      margin: "auto",
      maxWidth: "800px"
    },
    // borderRadius: "6px",
    marginTop: "100px !important",
    // overflow: "visible",
    // maxHeight: "unset",
    position: "relative",
    height: "fit-content"
  },
  dialogSelect: {
    width: "100%"
  }
})