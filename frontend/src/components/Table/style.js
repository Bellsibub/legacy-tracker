export default (theme) => ({
  tableResponsive: {
    // width: "100%",
    minHeight: '0.1%',
    overflowX: 'auto'
  },
  table: {
    marginBottom: '0',
    maxWidth: '100%',
    overflow: 'auto'
  },
  tableCell: {
    padding: '12px 8px!important',
    borderBottom: 'none',
    borderTop: `1px solid ${theme.palette.divider}`,
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      minHeight: '24px',
      minWidth: '32px'
    }
  },
  tableHeadCell: {
    color: theme.palette.text.secondary,
    fontSize: '1rem',
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    fontWeight: 400,
    paddingLeft: '.5em'
  },
  tableRow: {
    '& > *': {
      borderBottom: 'unset'
    }
  },
  collapseCell: {
    paddingTop: 0,
    paddingBottom: 0
  },
  expandTableCell: {
    padding: 0,
    borderLeft: `1px solid ${theme.palette.divider}`,
    alignItems: 'center'
  },
  tableCellButton: {
    alignItems: 'center',
    justifyContent: 'center',
    '& > *': {
      margin: 0,
      padding: 0
    }
  }
});
