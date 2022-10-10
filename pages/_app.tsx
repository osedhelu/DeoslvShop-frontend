import { lightTheme } from '@/themes'
import { ThemeProvider } from '@mui/material'
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={lightTheme}>
    <Component {...pageProps} />
  </ThemeProvider>
)

export default App