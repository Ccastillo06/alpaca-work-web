import { useMemo } from 'react'
import { Divider } from '@chakra-ui/core'

import { getWorkingSessionsFromUserParams } from '../../lib/firebase'
import { formatSessionsFromFirebase } from '../../utils/sessions'

import Layout from '../../components/Layout'
import DiscordInfo from '../../components/DiscordInfo'
import GeneralHoursChart from '../../components/GeneralHoursChart'

export default function InfoPage({ sessions = [] }) {
  const userWorkWithSessions = useMemo(() => formatSessionsFromFirebase(sessions), [sessions])
  const { discordId, username, discriminator, workSessions } = userWorkWithSessions

  return (
    <Layout>
      <DiscordInfo discordId={discordId} username={username} discriminator={discriminator} />
      <Divider my="1rem" borderColor="brand.emerald" borderBottom="1px" />
      <GeneralHoursChart workSessions={workSessions} />
    </Layout>
  )
}

// This page query can either be the user id or the username plus discord discriminator:
// query.id can be 337241225350173629
// query.id can be My%20Username%231234 encoded which translates to My Username#1234
export async function getServerSideProps({ query }) {
  try {
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
  } catch (err) {
    return {
      props: {
        sessions: []
      }
    }
  }
}
