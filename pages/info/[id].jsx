import { useMemo } from 'react'
import { Divider, Tabs, TabList, Tab, TabPanels, TabPanel } from '@chakra-ui/core'

import { getWorkingSessionsFromUserParams } from '../../lib/firebase'
import { formatSessionsFromFirebase } from '../../utils/sessions'

import Table from '../../components/Table'
import Layout from '../../components/Layout'
import DiscordInfo from '../../components/DiscordInfo'
import GeneralHoursChart from '../../components/GeneralHoursChart'
import SubjectHoursChart from '../../components/SubjectHoursChart'

const graphTabs = {
  'Horas por día': GeneralHoursChart,
  'Horas por temática': SubjectHoursChart
}

export default function InfoPage({ sessions = [] }) {
  const userWorkWithSessions = useMemo(() => formatSessionsFromFirebase(sessions), [sessions])
  const { discordId, username, discriminator, workSessions } = userWorkWithSessions

  return (
    <Layout>
      <DiscordInfo discordId={discordId} username={username} discriminator={discriminator} />

      <Divider my={['1rem', '2rem']} borderColor="brand.emeraldLight" borderBottom="1px" />

      <Tabs variant="enclosed" borderColor="brand.emeraldLight">
        <TabList>
          {Object.keys(graphTabs).map((title) => (
            <Tab key={title}>{title}</Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.keys(graphTabs).map((title) => {
            const Component = graphTabs[title]

            return (
              <TabPanel key={title} paddingTop="2rem">
                <Component workSessions={workSessions} />
              </TabPanel>
            )
          })}
        </TabPanels>
      </Tabs>

      {workSessions.length ? (
        <>
          <Divider my={['1rem', '2rem']} borderColor="brand.emeraldLight" borderBottom="1px" />

          <Table workSessions={workSessions} />
        </>
      ) : null}
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
