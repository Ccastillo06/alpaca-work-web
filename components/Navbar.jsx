import NextLink from 'next/link'
import { useState } from 'react'

import { Box, Image, Heading, Flex, Link, Button, useToast, Text } from '@chakra-ui/core'

export default function Navbar() {
  const [isBotButtonEnabled, setIsBotButtonEnabled] = useState(true)
  const toast = useToast()

  async function handleBotButtonClick() {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_ALPACA_BOT_URL)
      const json = await response.json()

      if (json.data) {
        setIsBotButtonEnabled(false)
        toast({
          title: '¡Despierto!',
          description: '¡Nos vemos en Discord! 😄',
          status: 'success',
          duration: 5000,
          isClosable: true
        })
      }
    } catch (err) {
      toast({
        title: 'Ups...',
        description: 'No hemos podido despertar a Alpaca Bot 😅.',
        status: 'error',
        duration: 5000,
        isClosable: true
      })
    }
  }

  return (
    <Box as="header" p="1rem" borderBottom="1px solid" borderBottomColor="brand.emeraldLight">
      <Flex direction={['column', 'row']} justify="space-between">
        <NextLink href="/" passHref>
          <Link display="flex" alignItems="center">
            <Image src="/images/main-logo.png" alt="Sala del código image" size={'60px'} />
            <Heading as="h1" pl="1rem" fontSize={['xl', '2xl']}>
              Sala del Código
            </Heading>
          </Link>
        </NextLink>

        <Flex alignItems="center" justify="center">
          <Button
            onClick={handleBotButtonClick}
            variantColor="teal"
            variant="ghost"
            isDisabled={!isBotButtonEnabled}
          >
            <Text pr="0.5rem">Despierta</Text>
            <Image src="/images/alpaca.png" size="30px" />
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
