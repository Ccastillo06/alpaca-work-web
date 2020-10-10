import { theme } from '@chakra-ui/core'

const customTheme = {
  ...theme,
  fonts: {
    heading: '"Roboto Mono", monospacef',
    body: '"Open Sans", sans-serif',
    mono: 'Menlo, monospace'
  },
  colors: {
    ...theme.colors,
    brand: {
      blue: '#264653',
      emerald: '#2A9D8F',
      cream: '#E9C46A',
      lightPeach: '#F4A261',
      darkPeach: '#E76F51'
    }
  }
}

export default customTheme
