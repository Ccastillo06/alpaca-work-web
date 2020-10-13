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
      emeraldLight: '#2a9d9061',
      cream: '#E9C46A',
      lightPeach: '#F4A261',
      darkPeach: '#E76F51'
    },
    light: {
      inputText: '#000000',
      inputBackground: '#ededed',
      tableText: '#000000',
      tableHeaderBackground: '#E59500',
    },
    dark: {
      inputText: '#FFFFFF',
      inputBackground: '#2A9D8F',
      tableText: '#FFFFFF',
      tableHeaderBackground: '#2A9D8F',
    }
  }
}

export default customTheme
