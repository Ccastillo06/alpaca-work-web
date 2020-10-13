import Head from 'next/head'
import { Flex, Box } from '@chakra-ui/core'

import Navbar from './Navbar'
import ThemeSwitcher from './ThemeSwitcher';

export default function Layout({ children }) {
  return (
      <Flex h="100vh" flexDirection="column">
        <Head>
          <title>Sala del Código</title>
          <link rel="icon" href="/favicon.ico" />
          <link
            href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Roboto+Mono&display=swap"
            rel="stylesheet"
          />

          <meta property="og:title" content="Sala del Código" />
          <meta property="og:description" content="Panel de usuario de la Sala del Código" />
          <meta property="og:url" content="https://saladelcodigo.vercel.app" />
          <meta property="og:image" content="/images/main-logo.png" />
        </Head>

        <Navbar />
        <Box as="main" flex="1" p="1rem">
          {children}
        </Box>

        <ThemeSwitcher />
      </Flex>
  )
}
