import createTheme from '@mui/material/styles/createTheme'
import ThemeProvider from '@mui/material/styles/ThemeProvider'
import { CSThemeVars } from './CSThemeVars'

const theme = createTheme({
  palette: {
    primary: {
      main: CSThemeVars.primary,
    },
    secondary: {
      main: CSThemeVars.secondary,
    },
  },
  typography: {
    allVariants: {
      color: CSThemeVars.fontColor,
      fontFamily: 'Inter',
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
      fontWeight: 500,
    },
  },
  components: {},
})

export const CSThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
