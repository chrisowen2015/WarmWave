// Taken from https://github.com/mui/material-ui/blob/master/examples/material-next-app-router-ts/src/components/ThemeRegistry/ThemeRegistry.tsx
"use client";

import * as React from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import NextAppDirEmotionCacheProvider from "./EmotionCache";
import { lightTheme, darkTheme } from "./theme";

export default function ThemeRegistry({ children }) {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <NextAppDirEmotionCacheProvider options={{ key: "mui" }}>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  );
}
