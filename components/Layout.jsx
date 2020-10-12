import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/core'

import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <Flex h="100vh" flexDirection="column">
      <Head>
        <title>Alpaca Work Web</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono&display=swap"
          rel="stylesheet"
        />
      </Head>

      <Navbar />
      <Box as="main" flex="1" p="1rem">
        {children}
      </Box>
    </Flex>
  )
}
