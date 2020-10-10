import { Link as NextLink } from 'next/link'

import { Box, Image, Link, Heading, Flex } from '@chakra-ui/core'

export default function Navbar() {
  return (
    <Box as="header" p="1rem">
      <Flex w="50%" direction="row">
        <Link as={NextLink} to="/" display="flex" alignItems="center">
          <Image src="/images/main-logo.png" alt="Sala del código image" size="100px" />
          <Heading as="h1" pl="1rem">
            Sala del Código
          </Heading>
        </Link>
      </Flex>
    </Box>
  )
}
