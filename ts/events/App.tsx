import { CSQueryClientProvider } from '../api/CSQueryClientProvider'
import { Main } from './Main'

export const App = () => {
  return (
    <CSQueryClientProvider>
      <Main />
    </CSQueryClientProvider>
  )
}
