import { Box, Heading } from '@chakra-ui/core'

export default function NoSessions() {
  return (
    <Box>
      <Heading textAlign="center">
        <span role="img">⏰</span>
        <span role="img">⏰</span>
        <span role="img">⏰</span>
      </Heading>
      <Heading textAlign="center">¡Todavía no tienes sesiones de trabajo!</Heading>
    </Box>
  )
}
