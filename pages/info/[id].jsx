import Layout from '../../components/Layout'

import { getWorkingSessionsFromUserParams } from '../../lib/firebase'

export default function InfoPage({ id, sessions }) {
  console.log(sessions)

  return <Layout>User Info page with id {id}</Layout>
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
      id: query.id,
      sessions
    }
  }
}
