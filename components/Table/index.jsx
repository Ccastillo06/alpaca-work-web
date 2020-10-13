import { useMemo, useState } from 'react'
import { Box, Heading, Text, Flex } from '@chakra-ui/core'

import { Container, TableHead, TableRow, TableHeader, TableBody, TableCell } from './Structure'
import { sortWorkSessions } from '../../utils/sessions'
import Pagination from './Pagination'
import CopyButton from './CopyButton'

const keyToTitle = {
  startDay: 'Día',
  subject: 'Tema',
  startHour: 'Empieza a las',
  endHour: 'Acaba a las',
  timeSpent: 'Tiempo invertido',
  id: 'ID'
}

const MAX_ELEMENTS_PER_PAGE = 20

export default function Table({ workSessions = [] }) {
  const [page, setPage] = useState(1)
  const [subjectFilter, setSubjectFilter] = useState(null)

  const orderedTableSessions = useMemo(() => sortWorkSessions(workSessions), [workSessions])
  const allSubjects = useMemo(() => [...new Set(workSessions.map((session) => session.subject))], [
    workSessions
  ])

  const filteredBySubject = useMemo(
    () =>
      orderedTableSessions.filter((session) =>
        subjectFilter ? session.subject === subjectFilter : true
      ),
    [orderedTableSessions, subjectFilter]
  )

  const totalPages = useMemo(() => Math.ceil(filteredBySubject.length / MAX_ELEMENTS_PER_PAGE), [
    filteredBySubject
  ])

  const elementsToShow = useMemo(
    () => filteredBySubject.slice((page - 1) * MAX_ELEMENTS_PER_PAGE, page * MAX_ELEMENTS_PER_PAGE),
    [orderedTableSessions, page, subjectFilter]
  )

  return (
    <Box overflowX="auto">
      <Heading as="h3" size="md" marginBottom="1rem">
        Desglose de sesiones trabajadas en Discord 💻
      </Heading>

      <Pagination
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        subjects={allSubjects}
        subjectFilter={subjectFilter}
        setSubjectFilter={setSubjectFilter}
      />

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
                      {key === 'id' ? (
                        <Flex alignItems="center">
                          <CopyButton value={session[key]} marginRight="0.5rem" />

                          <Text fontWeight={j ? 'regular' : 'bold'} fontSize="sm">
                            {session[key]}
                          </Text>
                        </Flex>
                      ) : (
                        <Text fontWeight={j ? 'regular' : 'bold'} fontSize="sm">
                          {session[key] || '-'}
                        </Text>
                      )}
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
