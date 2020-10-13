import { Heading, Box, List, ListItem, ListIcon } from '@chakra-ui/core'

export default function DiscordInfo({ username, discriminator, discordId }) {
  return (
    <Box as="section">
      <Heading as="h2" size="lg" mb="1rem">
        Datos de Discord:
      </Heading>

      <List>
        <ListItem mb="1rem">
          <Heading as="h3" size="md">
            <ListIcon icon={() => <span role="img">🧐</span>} />{' '}
            {username}#{discriminator}
          </Heading>
        </ListItem>

        <ListItem>
          <Heading as="h3" size="md">
            <ListIcon icon={() => <span role="img">🆔</span>} />{' '}
            {discordId}
          </Heading>
        </ListItem>
      </List>
    </Box>
  )
}
