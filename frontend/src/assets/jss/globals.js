const hexToRgb = (input) => {
  input += '';
  input = input.replace('#', '');
  const hexRegex = /[0-9A-Fa-f]/g;
  if (!hexRegex.test(input) || (input.length !== 3 && input.length !== 6)) {
    throw new Error('input is not a valid hex color.');
  }
  if (input.length === 3) {
    const first = input[0];
    const second = input[1];
    const last = input[2];
    input = first + first + second + second + last + last;
  }
  input = input.toUpperCase(input);
  const first = input[0] + input[1];
  const second = input[2] + input[3];
  const last = input[4] + input[5];
  return `${parseInt(first, 16)}, ${parseInt(second, 16)}, ${parseInt(last, 16)}`;
};

const drawerWidth = 260;

const drawerMiniWidth = 80;

export const appBarHeight = 120;

const defaultFont = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontWeight: '300',
  lineHeight: '1.5em'
};

export const colorPalette = {
  primary: { main: '#4277b7', light: '#6792c5', dark: '#2e5380' },
  secondary: { main: '#576E7D', light: '#788b97', dark: '#3c4d57' },
  accent: { main: '#27965D', light: '#52ab7d', dark: '#1b6941' }
};

const boxShadow = {
  boxShadow: `0 10px 30px -12px rgba(${hexToRgb(
    '#000'
  )}, 0.42), 0 4px 25px 0px rgba(${hexToRgb(
    '#000'
  )}, 0.12), 0 8px 10px -5px rgba(${hexToRgb('#000')}, 0.2)`
};

export const softBoxShadow = {
  boxShadow: `1px 2px 7px 0 rgba(${hexToRgb('#000')}, 0.2)`
};

export const title = {
  textDecoration: 'none',
  fontWeight: '300',
  marginTop: '30px',
  marginBottom: '25px',
  minHeight: '32px',
  fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
  '& small': {
    fontSize: '65%',
    fontWeight: '400',
    lineHeight: '1'
  }
};

export {
  hexToRgb,
  drawerWidth,
  drawerMiniWidth,
  boxShadow,
  defaultFont
};
