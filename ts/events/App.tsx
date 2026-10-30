import { CSThemeProvider } from '../theme/ThemeProvider'
import { Main } from './Main'

export const App = () => {
  return (
    <CSThemeProvider>
      <Main />
    </CSThemeProvider>
  )
}
