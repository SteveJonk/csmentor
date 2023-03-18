import { CSQueryClientProvider } from '../../api/CSQueryClientProvider'
import { CSThemeProvider } from '../../theme/ThemeProvider'
import { Main } from './Main'

export const App = () => {
  return (
    <CSQueryClientProvider>
      <CSThemeProvider>
        <Main />
      </CSThemeProvider>
    </CSQueryClientProvider>
  )
}
