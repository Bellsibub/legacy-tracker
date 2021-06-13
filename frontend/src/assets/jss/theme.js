import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { colorPalette } from 'assets/jss/globals';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: defaultTheme.palette.grey[300]
          // backgroundImage:
          //   'url(https://images.unsplash.com/photo-1500817487388-039e623edc21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=935&q=80)',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center center',
          // backgroundSize: 'cover',
          // backgroundAttachment: 'fixed'
        }
      }
    }
  },
  palette: {
    ...colorPalette
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: "2.5rem",
      lineHeight: 1.3,
      letterSpacing: "0.01em"
    },
    h2: {
      textAlign: 'right',
      fontSize: '2rem'
    },
    h3: {
      color: 'white',
      textTransform: 'uppercase',
      fontSize: '1rem',
      letterSpacing: '0.19em',
      fontWeight: 400,
      margin: '10px 0'
    },
    subtitle1: {
      color: "white",
      fontSize: '1rem',
      letterSpacing: '0.09em',
      lineHeight: 2.5,
      textTransform: 'uppercase',
      fontWeight: 400
    },
    subtitle2: {
      textAlign: 'right',
      color: defaultTheme.palette.text.secondary,
      fontSize: '1rem',
      letterSpacing: '0.1em',
      lineHeight: 2.9,
      textTransform: 'uppercase',
      fontWeight: 400
    },
    caption: {
      textTransform: 'uppercase',
      textAlign: 'center',
      marginTop: defaultTheme.spacing(2),
      marginBottom: defaultTheme.spacing(2)
    }
  }
});

export const muitheme = responsiveFontSizes(theme);
