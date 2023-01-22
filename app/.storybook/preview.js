// .storybook/preview.js

import { useMemo } from "react";

import { encoreThemeOptions } from "encore-ui";

import { createTheme } from '@mui/material'

/* Snipped for brevity */

// Add your theme configurations to an object that you can
// pull your desired theme from.
const THEMES = {
  light: createTheme(encoreThemeOptions),
  dark: createTheme(encoreThemeOptions),
};

export const withMuiTheme = (Story, context) => {
  // The theme global we just declared
  const { theme: themeKey } = context.globals;

  // only recompute the theme if the themeKey changes
  const theme = useMemo(() => THEMES[themeKey] || THEMES["light"], [themeKey]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Story />
    </ThemeProvider>
  );
};