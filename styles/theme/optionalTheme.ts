import { createTheme } from "@mui/material/styles";
import { blueGrey, teal, blue } from "@mui/material/colors";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: blueGrey[100],
      default: "#e8fff8",
    },
    primary: {
      light: blue[600],
      main: blue[500],
      dark: blue[400]
    },
    common: {
      white: blueGrey[50],
    },
    grey: {
      //header
      50: blueGrey[50],
      100: blueGrey[100],
      200: blueGrey[50],
      //scroolbar horizontal color chang it!!!
      400: blue[500],
      //scroolbar horizontal background
      500: blueGrey[400],
      //chip esp
      700: blueGrey[900],
      A100: blueGrey[900],
      A200: blueGrey[50],
      A400: blueGrey[200]
    },
  },
  typography: {
    fontFamily: "'Markazi Text', serif",
  },
});

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      paper: blueGrey[500],
      default: '#000428',
    },
    primary: {
      light: blue[500],
      main: blue[500],
      dark: blue[700]
    },
    common: {
      white: blueGrey[500],
    },
    grey: {
      //header
      50: blueGrey[500],
      100: blueGrey[800],
      200: blueGrey[100],
      //chip
      300: blueGrey[50],
      //
      400: blue[500],
      500: blueGrey[900],
      A100: blueGrey[50],
      A200: blueGrey[900],
      A400: blueGrey[800]
    }, info: {
      main: blue[800]
    }
  },
  typography: {
    fontFamily: "'Markazi Text', serif",
  },
});

const Theme = { lightTheme, darkTheme };

export default Theme;
