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
      tableText: '',
      tableBackground: '',
    },
    dark: {
      inputText: '#000000',
      inputBackground: '#2A9D8F',
      tableText: '',
      tableBackground: '',
    }
  }
}

export default customTheme
