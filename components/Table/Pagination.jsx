import { useMemo } from 'react'
import { Heading, Button, Select, Flex } from '@chakra-ui/core'

import { TableAddedRow } from './Structure'

export default function Pagination({
  page,
  setPage,
  totalPages,
  subjects,
  subjectFilter,
  setSubjectFilter
}) {
  const pagination = useMemo(
    () => [
      {
        text: '⏮',
        onClick: () => setPage(1),
        disabled: page === 1
      },
      {
        text: '⏪',
        onClick: () => setPage(page - 1),
        disabled: page === 1
      },
      {
        type: 'heading',
        text: `Página ${page}/${totalPages}`
      },
      {
        text: '⏩',
        onClick: () => setPage(page + 1),
        disabled: page === totalPages
      },
      {
        text: '⏭',
        onClick: () => setPage(totalPages),
        disabled: page === totalPages
      }
    ],
    [page, totalPages]
  )

  return (
    <TableAddedRow>
      <Select
        marginBottom={['1rem', '0']}
        flexBasis={['100%', '40%']}
        placeholder="Filtra por un tema"
        value={subjectFilter}
        onChange={(ev) => {
          setPage(1)
          setSubjectFilter(ev.target.value)
        }}
      >
        {subjects.map((name) => (
          <option key={name} value={name}>
            {name.toUpperCase() || 'SIN TEMA'}
          </option>
        ))}
      </Select>

      <Flex alignItems="center">
        {pagination.map(({ type, text, onClick, disabled }, i) =>
          type === 'heading' ? (
            <Heading key={i} as="h4" size={['md', 'sm']} textAlign="center">
              {text}
            </Heading>
          ) : (
            <Button key={i} variant="ghost" onClick={onClick} disabled={disabled}>
              <Heading as="h4" size="md">
                {text}
              </Heading>
            </Button>
          )
        )}
      </Flex>
    </TableAddedRow>
  )
}
