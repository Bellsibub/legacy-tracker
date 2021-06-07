import {
  whiteColor,
  grayColors,
  title
  // blackColor,
  // hexToRgb,
} from 'assets/jss/globals';

const cardHeaderStyle = {
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

  cardHeaderStats: {
    '& .cardCategory, & .cardTitle': {
      textAlign: "right"
    },
    '& .cardCategory': {
      color: grayColors[0],
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
      marginTop: "0px",
      marginBottom: "3px",
      minHeight: 'auto',
      fontSize: '2rem'
    }
  },
  cardHeaderIcon: {
    textAlign: 'right',
    background: 'transparent',
    boxShadow: 'none',
    borderRadius: '3px',
    backgroundColor: grayColors[0],
    padding: '15px',
    marginTop: '-30px',
    // marginRight: "15px",
    float: 'left',
    margin: '0 15px',
    // padding: "0",
    position: 'relative',
    color: whiteColor,
    '& svg': {
      // lineHeight: "56px",
      // textAlign: "center",
      width: '46px',
      height: '46px',
      margin: '10px 10px 4px'
    }
  },
  cardHeaderText: {
    display: 'inline-block',
    float: "none",
    marginRight: "0",
    borderRadius: "3px",
    backgroundColor: grayColors[0],
    padding: "15px",
    marginTop: "-20px",
    '& .cardCategory, & .cardTitle': {
      color: whiteColor,
      margin: "10px 0"
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
      fontSize: '1.5rem',
      fontWeight: 400
    }
  }
};

export default cardHeaderStyle;
