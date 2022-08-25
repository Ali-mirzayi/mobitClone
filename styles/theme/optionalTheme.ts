import { createTheme } from "@mui/material/styles";
import { blueGrey, teal, blue } from "@mui/material/colors";
import type { AppProps } from "next/app";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      paper: blueGrey[50],
      default: teal[50],
    },
    primary: {
      main: teal[500],
    },
    common: {
      white: blueGrey[50],
    },
    grey: {
      //header
      50: blueGrey[50],
      100: blueGrey[100],
      200: blueGrey[50],
      //scroolbar horizontal color  
      400: blue[500],
      //scroolbar horizontal background
      500: blueGrey[400],
      //chip esp
      700: blueGrey[900],
      //
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
      // default: teal[900],
      default: '#000428',
    },
    primary: {
      main: teal[500],
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
    },info:{
      main: blue[800]
    }
  },
  typography: {
    fontFamily: "'Markazi Text', serif",
  },
});

const Theme = { lightTheme, darkTheme };

export default Theme;
