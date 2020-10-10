import { useState } from 'react'
import { useRouter } from 'next/router'

import { Flex, Heading, Button, Code } from '@chakra-ui/core'
import { FormControl, FormLabel, FormErrorMessage, FormHelperText, Input } from '@chakra-ui/core'

export default function SearchBar() {
  const router = useRouter()
  const [searchState, setSearchState] = useState('')

  function handleInputChange(ev) {
    const value = ev.target.value
    setSearchState(value)
  }

  function handleSearch(ev) {
    ev.preventDefault()
    console.log('i work', searchState)
    router.push(`/info/${searchState}`)
  }

  return (
    <Flex flexDirection="column" alignItems="center" pt="4rem">
      <Heading as="h3" size="md" mb="1rem">
        Ver mis gráficos.
      </Heading>

      <Flex alignItems="center" flexWrap="wrap" justifyContent={['center']}>
        <FormControl>
          <FormLabel htmlFor="id">Discord Id:</FormLabel>
          <Input
            type="text"
            id="discordId"
            isRequired
            placeholder="Discord Id"
            value={searchState}
            onChange={handleInputChange}
          />
          <FormErrorMessage>
            Introduce <b>!!me</b> en discord y pega en el formulario tu <b>Discord Id</b> 😅
          </FormErrorMessage>
          <FormHelperText id="id-helper-text">
            Puedes usar el comando <Code>!!me</Code> en el canal <Code>#bots-commands</Code> para
            saber tu <b>id de Discord</b>
          </FormHelperText>
        </FormControl>
        <Button
          variantColor="teal"
          variant="ghost"
          mt={['1rem', 0]}
          onClick={(ev) => handleSearch(ev)}
        >
          ¡Vamos!
        </Button>
      </Flex>
    </Flex>
  )
}
