import {
  // whiteColor,
  // grayColors,
  title
  // primaryColor,
  // accentColor
  // blackColor,
  // hexToRgb,
} from 'assets/jss/globals';

export default (theme) => ({
  cardHeader: {
    padding: '0.75rem 1.25rem',
    // marginBottom: "0",
    // borderBottom: "none",
    // background: "transparent",
    zIndex: '3 !important'
    // "&:first-child": {
    //   borderRadius: "calc(.25rem - 1px) calc(.25rem - 1px) 0 0"
    // },
    // "&:not($cardHeaderIcon):not($cardHeaderImage):not($cardHeaderText)": {
    //   borderRadius: "3px",
    //   marginTop: "-20px",
    //   padding: "15px"
    // },
    // ".material-icons": {
    //   fontSize: "36px",
    //   lineHeight: "56px",
    //   width: "56px",
    //   height: "56px",
    //   textAlign: "center",
    //   overflow: "unset",
    //   marginBottom: "1px"
    // },
    // "&$cardHeaderImage": {
    //   marginLeft: "15px",
    //   marginRight: "15px",
    //   marginTop: "-30px",
    //   borderRadius: "6px"
    // },
    // "&$cardHeaderText": {
    //   display: "inline-block"
    // }
  },

  primary: {
    '& $cardHeaderIcon, & $cardHeaderText': {
      backgroundColor: theme.palette.primary.main
    }
  },
  accent: {
    '& $cardHeaderIcon, & $cardHeaderText': {
      backgroundColor: theme.palette.accent.main
    }
  },

  cardHeaderStats: {
    '& .cardCategory, & .cardTitle': {
      textAlign: 'right'
    },
    '& .cardCategory': {
      color: theme.palette.text.secondary,
      fontSize: '.9rem',
      paddingTop: '10px',
      letterSpacing: '0.08333em',
      lineHeight: 2.66,
      textTransform: 'uppercase',
      fontWeight: 400,
      margin: '0'
    },
    '& .cardTitle': {
      ...title,
      marginTop: '0px',
      marginBottom: '3px',
      minHeight: 'auto',
      fontSize: '2rem'
    }
  },
  cardHeaderIcon: {
    textAlign: 'right',
    background: 'transparent',
    boxShadow: 'none',
    borderRadius: '3px',
    backgroundColor: theme.palette.primary.main,
    padding: '5px',
    marginTop: '-30px',
    // marginRight: "15px",
    float: 'left',
    margin: '0 5px',
    // padding: "0",
    position: 'relative',
    color: 'white',
    '& svg': {
      // lineHeight: "56px",
      // textAlign: "center",
      width: '36px',
      height: '36px',
      margin: '10px 10px 4px'
    }
  },
  cardHeaderText: {
    display: 'inline-block',
    float: 'left',
    marginRight: '0',
    borderRadius: '3px',
    backgroundColor: theme.palette.primary.main,
    padding: '15px',
    marginTop: '-20px',
    '& .cardCategory, & .cardTitle': {
      color: 'white',
      margin: '10px 0',
      textAlign: 'left'
    },
    '& .cardCategory': {
      // color: grayColors[0],
      fontSize: '1rem',
      // paddingTop: '10px',
      letterSpacing: '0.08333em',
      // lineHeight: 2.66,
      // textTransform: 'uppercase',
      fontWeight: 400
      // minHeight: 'auto'
      // margin: '0'
    },
    '& .cardTitle': {
      // ...title
      textTransform: 'uppercase',
      fontSize: '1rem',
      letterSpacing: '0.1em',
      fontWeight: 400
    }
  }
});
