
import { ThemeProvider, CSSReset, ColorModeProvider } from '@chakra-ui/core'

import customTheme from '../theme'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export default MyApp
