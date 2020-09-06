import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
  typography: {
    fontFamily: 'Times New Roman',
    htmlFontSize: 14,
  },
  palette: {
    primary: {
      main: '#184469',
    },
    secondary: {
      main: 'rgba(52, 146, 255, 1)',
    },
    error: {
      main: 'rgba(244, 54, 120, 1)',
    },
  },
});

export default theme;
