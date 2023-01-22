/**

MIT License

Copyright (c) 2023 Alexander Forselius <drsounds@gmail.com>

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

 */
import { ThemeOptions } from '@mui/material/styles';

export const encoreThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    /*subdued: {
      main: '#6a6a6a',
    },*/
    primary: {
      main: '#1ed760',
    },
    info: {
      main: '#0288d1',
    },
    error: {
      main: '#e91429',
    },
    secondary: {
      main: '#6a6a6a',
    },
    text: {
      primary: '#6a6a6a',
    },
  },
  components: {
    MuiTooltip: {
      defaultProps: {
        arrow: true,
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: 'white',
          color: 'black',
        },
      },
      defaultProps: {
        color: 'default',
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
        disableFocusRipple: true,
      },
      styleOverrides: {
        outlined: {
          height: 8,
          borderWidth: 1,
        },
        text: {
          '&:focus': {
            border: 'none',
            outline: 'none',
            background: 'none',
          },
        },
        root: {
          '&:focus': {
            outline: '1px solid currentColor',
          },
          padding: '16pt 20px',
          fontWeight: 'bold',
          boxShadow: 'none',
          textTransform: 'initial',
          containedPrimary: {},
          textPrimary: {},
          '&:hover': {
            boxShadow: 'none',
            transform: 'scale(1.05)',
          },
          '&:active': {
            boxShadow: 'none',
            transform: 'scale(0.99)',
          },
          background: 'default',
          borderRadius: 83,
          height: 8,
        },
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableTouchRipple: true,
        disableRipple: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiButtonGroup: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: 'rgb(0 0 0 / 30%) 0px 2px 6px',
          borderRadius: '8px',
          padding: '24px',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: 'rgb(0 0 0 / 30%) 0px 2px 6px',
          borderRadius: '8px',
          padding: '24px',
          '&.special': {
            '&:hover': {
              boxShadow: '0 5pt 20pt -3pt rgba(0, 0, 0, .1)',
            },
          },
          '& .MuiCardContent': {
            padding: 0,
          },
          '&.gradient': {
            boxShadow: '0 5pt 8pt 0pt var(--shadow-color)',
            '&:hover': {
              boxShadow: '0 5pt 20pt -3pt var(--shadow-color)',
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        root: {
          '&.Mui-hover': {
            transform: 'scale(1.05)',
          },
          '&.Mui-active': {
            transform: 'scale(0.99)',
          },
          boxShadow: 'none',
        },
      },
      defaultProps: {
        size: 'small',
      },
    },
    MuiFormControl: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
    },
    MuiFormHelperText: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: 'small',
      },
    },
    MuiInputBase: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiInputLabel: {
      defaultProps: {
        margin: 'dense',
      },
    },
    MuiTextField: {
      defaultProps: {
        margin: 'dense',
        size: 'small',
      },
    },
    MuiList: {
      defaultProps: {
        dense: true,
      },
    },
    MuiMenuItem: {
      defaultProps: {
        dense: true,
      },
    },
    MuiTable: {
      defaultProps: {
        size: 'small',
      },
    },
  },
  typography: {
    fontFamily: 'Plus Jakarta Sans',
    h1: {
      fontWeight: 'bold',
      fontSize: '8rem',
    },
    h2: {
      fontWeight: 'bold',
      color: 'gray',
      fontSize: '4rem',
    },
  },
  shape: {
    borderRadius: 4,
  },
};
