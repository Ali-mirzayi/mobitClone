import React, { useState, useMemo } from "react";
import type { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import Layout from "../components/Headers/Layout";
import NextNProgress from "nextjs-progressbar";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import createEmotionCache from '../utility/createEmotionCache';
import lightThemeOptions from '../styles/theme/optionalTheme';
import '../styles/globals.css';
interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();
const MyApp: React.FC<MyAppProps> = (props) => {
  const { darkTheme } = lightThemeOptions;
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  //initial theme
  const [dark, setDark] = useState(darkTheme);
  const theme = useMemo(() => createTheme(dark), [dark])


  return (
    <CacheProvider value={emotionCache}>
      <NextNProgress color="#8A2BE2" height={5}/>
      <ThemeProvider theme={theme}>
        <Layout setDark={setDark}>
          <CssBaseline />
          <Component {...pageProps} />
        </Layout>
       </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
