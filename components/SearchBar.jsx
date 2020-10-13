import { useState } from 'react'
import { useRouter } from 'next/router'

import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Flex,
  Heading,
  Button,
  Code,
  FormErrorMessage,
  Box
} from '@chakra-ui/core'

export default function SearchBar() {
  const router = useRouter()
  const [formErrors, setFormErrors] = useState({
    discordId: ''
  })
  const [formState, setFormState] = useState({
    discordId: ''
  })

  function handleInputChange(ev) {
    const { id, value } = ev.target

    setFormState({
      ...formState,
      [id]: value
    })
  }

  const { discordId } = formState

  function handleSearch(ev) {
    ev.preventDefault()

    const cleanDiscordId = discordId.trim()

    if (cleanDiscordId) {
      if (cleanDiscordId.includes('#')) {
        const encoded = encodeURI(cleanDiscordId).replace('#', '%23')
        router.push(`/info/${encoded}`)
      } else {
        router.push(`/info/${cleanDiscordId}`)
      }
    } else {
      setFormErrors({ discordId: '¡No puedes enviar valores vacíos en este campo 🚨!' })
    }
  }
  
  return (
    <Box pt={['2rem', '8rem']}>
      <Heading textAlign="center" as="h3" size="md" mb="1rem">
        Ver mis gráficos 🧐
      </Heading>

      <Flex
        as="form"
        onSubmit={handleSearch}
        flexDirection="column"
        alignItems="center"
        flexWrap="wrap"
        justifyContent={['center']}
      >
        <FormControl isInvalid={Boolean(formErrors.discordId)} isRequired>
          <FormLabel fontWeight="bold" htmlFor="discordId">
            Discord id o username#código:
          </FormLabel>
          <Input
            type="text"
            id="discordId"
            placeholder="647126721243251739 o MyName#1234"
            minLength="6"
            value={discordId}
            onChange={handleInputChange}
          />
          <FormErrorMessage id="discordId-error-message">{formErrors.discordId}</FormErrorMessage>
          <FormHelperText id="discordId-helper-text">
            Puedes usar el comando <Code>!!me</Code> en el canal <Code>#bots-commands</Code> para
            saber tu <b>id</b> o <b>username y código</b> de Discord.
          </FormHelperText>
        </FormControl>

        <Button type="submit" variantColor="teal" variant="ghost" mt={['1rem']}>
          ¡Vamos!
        </Button>
      </Flex>
    </Box>
  )
}
