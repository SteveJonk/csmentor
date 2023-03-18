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
    },
  },
})

export const CSThemeProvider = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
