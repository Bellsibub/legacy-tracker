export default (theme) => ({
  cardBody: {
    padding: '1rem 20px',
    '& .cardCategory': {
      textAlign: 'right',
      color: theme.palette.text.secondary,
      fontSize: '.9rem',
      letterSpacing: '0.08333em',
      lineHeight: 2.66,
      textTransform: 'uppercase',
      fontWeight: 400,
      margin: '0'
    }
  }
  // cardBodyBackground: {
  //   position: "relative",
  //   zIndex: "2",
  //   minHeight: "280px",
  //   paddingTop: "40px",
  //   paddingBottom: "40px",
  //   maxWidth: "440px",
  //   margin: "0 auto"
  // },
  // cardBodyPlain: {
  //   paddingLeft: "5px",
  //   paddingRight: "5px"
  // },
  // cardBodyFormHorizontal: {
  //   paddingLeft: "15px",
  //   paddingRight: "15px",
  //   "& form": {
  //     margin: "0"
  //   }
  // },
  // cardPricing: {
  //   padding: "15px!important",
  //   margin: "0px!important"
  // },
  // cardSignup: {
  //   padding: "0px 30px 0px 30px"
  // },
  // cardBodyColor: {
  //   borderRadius: "6px",
  //   "& h1,& h2,& h3": {
  //     "& small": {
  //       color: `rgba(${hexToRgb(whiteColor)}, 0.8)`
  //     }
  //   }
  // },
  // cardBodyProfile: {
  //   marginTop: "15px"
  // },
  // cardBodyCalendar: {
  //   padding: "0px !important"
  // }
});
