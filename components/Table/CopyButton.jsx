import { Tooltip, IconButton, useClipboard } from '@chakra-ui/core'

export default function CopyButton({ value }) {
  const { onCopy, hasCopied } = useClipboard(value)

  return (
    <Tooltip hasArrow label="Copia la ID y borra la sesión desde el canal de discord con !!remove ID" placement="left">
      <IconButton onClick={onCopy} variant="ghost" variantColor={hasCopied ? 'green' : 'teal'} icon="copy" />
    </Tooltip>
  )
}
