import React from 'react'

import { CssBaseline } from '@mui/material';
import { createTheme } from '@mui/material/styles'
import { ThemeProvider } from '@mui/styles'

import { encoreThemeOptions } from 'encore-ui'

import MuiComponentSamples from './MuiComponentSamples'

const theme = createTheme(encoreThemeOptions)
 
function App() {
  return ( 
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MuiComponentSamples />
    </ThemeProvider>    
  );
}

export default App;
