import ThemeProvider from '@mui/material/styles/ThemeProvider'
import createTheme from '@mui/material/styles/createTheme'
import { CSThemeVars } from './CSThemeVars'

const theme = createTheme({
  palette: {
    primary: {
      main: CSThemeVars.primary,
    },
    secondary: {
      main: CSThemeVars.secondary,
    },
    info: {
      main: CSThemeVars.info,
    },
  },
  typography: {
    allVariants: {
      color: CSThemeVars.fontColor,
      fontWeight: 300,
    },
    h1: {
      fontSize: 24,
      fontWeight: 500,
    },
    h2: {
      fontSize: 20,
      fontWeight: 500,
    },
    h3: {
      fontSize: 18,
      fontWeight: 300,
    },
    h4: {
      fontSize: 14,
      fontWeight: 300,
    },
    body2: {
      color: CSThemeVars.grey,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        underlineNone: {
          cursor: 'pointer',
        },
      },
    },
  },
})

export const CSThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
