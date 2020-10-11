import { useMemo } from 'react'
import { Box, Heading, Text } from '@chakra-ui/core'

import { Container, TableHead, TableRow, TableHeader, TableBody, TableCell } from './Structure'
import { sortWorkSessions } from '../../utils/sessions'

const keyToTitle = {
  startDay: 'Día',
  subject: 'Tema',
  startHour: 'Empieza a las',
  endHour: 'Acaba a las',
  timeSpent: 'Tiempo invertido'
}

// @TODO Improve table to support virtualization, filtering and pagination...
export default function Table({ workSessions = [] }) {
  const orderedTableSessions = useMemo(() => sortWorkSessions(workSessions), [workSessions])

  return (
    <Box overflowX="auto">
      <Heading as="h3" size="md" marginBottom="1rem">
        Desglose de sesiones trabajadas en Discord 💻
      </Heading>

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
          {orderedTableSessions.map((session, i) => (
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
  )
}
