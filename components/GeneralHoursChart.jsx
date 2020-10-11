import { useMemo } from 'react'
import { BarChart, Bar, XAxis, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from 'recharts'
import { Box, Heading } from '@chakra-ui/core'

import NoSessions from './NoSessions'
import { getSessionsStackedByDay } from '../utils/sessions'

export default function GeneralHoursChart({ workSessions = [] }) {
  const graphSessions = useMemo(() => getSessionsStackedByDay(workSessions), [workSessions])

  return (
    <Box>
      {graphSessions.length ? (
        <>
          <Heading textAlign="center" as="h3" size="md" pb="1rem">
            Total de horas por día del mes
          </Heading>

          <Box height="400px">
            <ResponsiveContainer>
              <BarChart data={graphSessions}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <Tooltip />
                <Legend />
                <Bar dataKey="hours" name="Horas invertidas 🐂" fill="#8884d8" />
                <Bar dataKey="minutes" name="Minutos invertidos ⏰" fill="#E59500" />
                <Bar dataKey="seconds" name="Segundos invertidos 🎯" fill="#002642" />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </>
      ) : (
        <NoSessions />
      )}
    </Box>
  )
}
