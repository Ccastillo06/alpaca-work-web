import { useMemo, useState } from 'react'
import { Box, Heading, Text, Button } from '@chakra-ui/core'

import {
  Container,
  TableHead,
  TableRow,
  TableHeader,
  TableBody,
  TableCell,
  TableAddedRow
} from './Structure'
import { sortWorkSessions } from '../../utils/sessions'

const keyToTitle = {
  startDay: 'Día',
  subject: 'Tema',
  startHour: 'Empieza a las',
  endHour: 'Acaba a las',
  timeSpent: 'Tiempo invertido'
}

const MAX_ELEMENTS_PER_PAGE = 20

// @TODO Improve table to support virtualization, filtering and pagination...
export default function Table({ workSessions = [] }) {
  const [page, setPage] = useState(1)

  const orderedTableSessions = useMemo(() => sortWorkSessions(workSessions), [workSessions])
  const totalPages = useMemo(() => Math.ceil(workSessions.length / MAX_ELEMENTS_PER_PAGE), [
    workSessions
  ])

  const elementsToShow = useMemo(
    () =>
      orderedTableSessions.slice((page - 1) * MAX_ELEMENTS_PER_PAGE, page * MAX_ELEMENTS_PER_PAGE),
    [orderedTableSessions, page]
  )

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
    [page]
  )

  return (
    <Box overflowX="auto">
      <Heading as="h3" size="md" marginBottom="1rem">
        Desglose de sesiones trabajadas en Discord 💻
      </Heading>

      <TableAddedRow>
        {pagination.map(({ type, text, onClick, disabled }, i) =>
          type === 'heading' ? (
            <Heading key={i} as="h4" size="md">
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
      </TableAddedRow>

      <Box>
        <Container>
          <TableHead>
            <TableRow>
              {Object.keys(keyToTitle).map((key) => (
                <TableHeader
                  key={key}
                  fontWeight="bold"
                  color="inherit"
                  borderBottomColor="brand.emeraldLight"
                >
                  {keyToTitle[key]}
                </TableHeader>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {elementsToShow.map((session, i) => (
              <TableRow key={i} borderBottom="1px" borderBottomColor="brand.emeraldLight">
                {Object.keys(keyToTitle).map((key, j) =>
                  keyToTitle[key] ? (
                    <TableCell key={key}>
                      <Text fontWeight={j ? 'regular' : 'bold'} fontSize="sm">
                        {session[key] || '-'}
                      </Text>
                    </TableCell>
                  ) : null
                )}
              </TableRow>
            ))}
          </TableBody>
        </Container>
      </Box>
    </Box>
  )
}
