import { useMemo } from 'react'
import format from 'date-fns/format'
import subHours from 'date-fns/subHours'
import getHours from 'date-fns/getHours'
import getMinutes from 'date-fns/getMinutes'
import getSeconds from 'date-fns/getSeconds'

import { getWorkingSessionsFromUserParams } from '../../lib/firebase'
import { getTimeFromMs } from '../../utils/date'

import Layout from '../../components/Layout'
import DiscordInfo from '../../components/DiscordInfo'
import HoursChart from '../../components/HoursChart'

export default function InfoPage({ sessions }) {
  const formattedSessions = useMemo(
    () =>
      sessions.reduce((acc, next) => {
        const { startTime, endTime, timeSpent } = next.data

        return {
          discordId: sessions[0].data.discordId,
          username: sessions[0].data.username,
          discriminator: sessions[0].data.discriminator,
          workSessions: [
            ...(acc.workSessions || []),
            {
              startDay: format(startTime, 'dd-MM-yyyy'),
              startHour: format(startTime, 'HH:mm:ss'),
              endDay: format(endTime, 'dd-MM-yyyy'),
              endHour: format(endTime, 'HH:mm:ss'),
              timeSpent: getTimeFromMs(timeSpent),
              timeSpentInMs: timeSpent
            }
          ]
        }
      }, {}),
    [sessions]
  )

  const graphSessions = useMemo(() =>
    formattedSessions.workSessions.map(
      (session) => ({
        name: session.startDay,
        timeSpent: session.timeSpent,
        hours: getHours(subHours(session.timeSpentInMs, 1)),
        minutes: getMinutes(session.timeSpentInMs), // / 1000 / 60 / 60).toFixed(2)
        seconds: getSeconds(session.timeSpentInMs) // / 1000 / 60 / 60).toFixed(2)
      }),
      [formattedSessions]
    )
  )

  const { discordId, username, discriminator } = formattedSessions

  return (
    <Layout>
      <DiscordInfo discordId={discordId} username={username} discriminator={discriminator} />
      <HoursChart graphSessions={graphSessions} />
    </Layout>
  )
}

// This page query can either be the user id or the username plus discord discriminator:
// query.id can be 337241225350173629
// query.id can be My%20Username%231234 encoded which translates to My Username#1234
export async function getServerSideProps({ query }) {
  const userWorkingSessions = await getWorkingSessionsFromUserParams(query.id)
  const sessions = userWorkingSessions.docs.map((doc) => ({
    id: doc.id,
    data: doc.data()
  }))

  return {
    props: {
      sessions: sessions
    }
  }
}
