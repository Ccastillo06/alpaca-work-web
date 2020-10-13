import { Spinner, Flex } from '@chakra-ui/core'

export default function LoadingBar() {
  return (
    <Flex alignItems="center" justifyContent="center">
      <Spinner />
    </Flex>
  )
}
