import { Tooltip, IconButton, useClipboard, useToast } from '@chakra-ui/core'

export default function CopyButton({ value }) {
  const toast = useToast()
  const { onCopy, hasCopied } = useClipboard(value)

  function handleCopy() {
    onCopy()
    toast({
      title: `¡Copiada la ID ${value}!`,
      description: '¡Usa esta ID en Discord para borrar tu sesión! 🔥',
      status: 'success',
      isClosable: true,
      duration: 3000,
      position: 'bottom-left'
    })
  }

  return (
    <Tooltip
      hasArrow
      label="Copia la ID y borra la sesión desde el canal de discord con !!remove ID"
      placement="left"
    >
      <IconButton
        onClick={handleCopy}
        variant="ghost"
        variantColor={hasCopied ? 'green' : 'teal'}
        icon="copy"
      />
    </Tooltip>
  )
}
