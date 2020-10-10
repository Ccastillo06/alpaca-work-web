import { useState } from 'react'
import { useRouter } from 'next/router'

import { Flex, Heading, Button } from '@chakra-ui/core'
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
    <Flex flexDirection="column" alignItems="center" pt="5rem">
      <Heading as="h3" size="md">
        Ver mis gráficos.
      </Heading>

      <Flex alignItems="center">
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
            Puedes usar el comando <b>!!me en Discord</b> (canal #bots) <b>para saber tu id</b> de
            Discord
          </FormHelperText>
        </FormControl>
        <Button variantColor="teal" variant="ghost" onClick={(ev) => handleSearch(ev)}>
          Vamos!
        </Button>
      </Flex>
    </Flex>
  )
}
