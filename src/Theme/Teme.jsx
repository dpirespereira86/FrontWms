import { createTheme } from '@material-ui/core/styles';
import RobotoCondensed from './Fonts/RobotoCondensed-Regular.ttf';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: localStorage.getItem('theme') == 'dark' ? '#212121' : '#311b92',
      light: localStorage.getItem('theme') == 'dark' ? '#616161' : '#b388ff',
      dark: localStorage.getItem('theme') == 'dark' ? '#000' : '#221266',
      contrastText: '#ffff',
    },
    common: {
      black: localStorage.getItem('theme') == 'dark' ? '#000' : '#000',
      white: localStorage.getItem('theme') == 'dark' ? '#42424' : '#fff',
    },
    secondary: {
      main: '#42a5f5',
      light: '#82b1ff',
      dark: '#0d47a1',
      contrastText: '#382475',
    },
    info: {
      main: '#372470',
      light: '#603fbd',
      dark: '#424242',
      contrastText: '#212121',
    },
    grey: {
      50: '#fafafafa',
    },
  },
  typography: {
    fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: ['Roboto Condensed', 'sans-serif'].join(','),
      fontWeight: 300,
      fontSize: '6rem',
      lineHeight: 1.167,
      letterSpacing: '-0.01562em',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Roboto Condensed';
          font-style: Regular;
          font-display: swap;
          font-weight: 400;
          src: "local('Roboto Condensed'), local('Roboto Condensed-Regular'), url(${RobotoCondensed}) format('ttf')";
          unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
        }
      `,
    },
  },
});
