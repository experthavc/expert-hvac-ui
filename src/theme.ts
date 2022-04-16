import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#dbdb0b',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#212121',
    },
    text: {
      primary: '#acacac',
      secondary: '#fff'
    },
    divider: '#212121'
  },
  typography: {
    htmlFontSize: 20,
    fontFamily: "'Gilroy', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, 
    fontWeightRegular: 400, 
    fontWeightMedium: 700,
    subtitle1: {
      fontSize: '17px'
    }
  }
});

export default responsiveFontSizes(theme);
