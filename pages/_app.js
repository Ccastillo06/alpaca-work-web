import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import customTheme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
