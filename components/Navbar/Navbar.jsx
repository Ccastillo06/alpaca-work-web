import NextLink from 'next/link'

import { Box, Image, Heading, Flex, Link } from '@chakra-ui/core'

export default function Navbar() {
  return (
    <Box as="header" p="1rem" borderBottom="1px solid" borderBottomColor="brand.emerald">
      <Flex direction="row">
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Image
              src="/images/main-logo.png"
              alt="Sala del código image"
              size={['60px', '100px']}
            />
            <Heading as="h1" pl="1rem" fontSize={['xl', '2xl']}>
              Sala del Código
            </Heading>
          </Link>
        </NextLink>
      </Flex>
    </Box>
  )
}
