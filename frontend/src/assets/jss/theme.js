import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { colorPalette } from 'assets/jss/globals';

const defaultTheme = createMuiTheme();

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        body: {
          backgroundColor: defaultTheme.palette.grey[300],
          backgroundImage:
            'linear-gradient(to bottom, rgba(255,255,255,0.57), rgba(1,62,136,0.9)), url(https://res.cloudinary.com/dsp41gbcw/image/upload/v1624954335/legacyTracker/bkg.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed'
        }
      }
    },
    MuiPopover: {
      paper: {
        padding: defaultTheme.spacing(2),
        minWidth: '25%',
        maxWidth: '45%'
      }
    }
  },
  breakpoints: {
    values: {
      xs: 0,
      mobile: 425,
      sm: 800,
      md: 1140,
      lg: 1280,
      xl: 1920
    }
  },
  palette: {
    ...colorPalette
  },
  typography: {
    h1: {
      fontWeight: 400,
      fontSize: '2.5rem',
      lineHeight: 1.3,
      letterSpacing: '0.01em'
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
      color: 'white',
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
