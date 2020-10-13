import { Box, Flex, useColorMode } from '@chakra-ui/core'

import theme from '../../theme'

export function Container(props) {
  return (
    <Box shadow="sm" rounded="lg">
      <Box as="table" width="full" {...props} />
    </Box>
  )
}

export function TableBody(props) {
  return <Box as="tbody" {...props} />
}

export function TableCell(props) {
  return <Box as="td" px="6" py="4" lineHeight="1.25rem" whiteSpace="nowrap" {...props} />
}

export function TableHead(props) {
  return <Box as="thead" {...props} />
}

export function TableHeader(props) {
  const { colorMode } = useColorMode();
  return (
    <Box
      as="th"
      px="6"
      py="3"
      borderBottomWidth="1px"
      backgroundColor="gray.50"
      textAlign="left"
      fontSize="xs"
      color="gray.500"
      textTransform="uppercase"
      letterSpacing="wider"
      lineHeight="1rem"
      fontWeight="medium"
      bg={theme.colors[colorMode].tableHeaderBackground}
      {...props}
    />
  )
}

export function TableRow(props) {
  return <Box as="tr" {...props} />
}

export function TableAddedRow(props) {
  return (
    <Flex py="1rem" alignItems="center" justifyContent="space-between" flexWrap="wrap" {...props} />
  )
}
