import admin from 'firebase-admin'

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert({
      type: process.env.FIREBASE_TYPE,
      project_id: process.env.FIREBASE_PROJECT_ID,
      private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
      private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      client_id: process.env.FIREBASE_CLIENT_ID,
      auth_uri: process.env.FIREBASE_AUTH_URI,
      token_uri: process.env.FIREBASE_TOKEN_URI,
      auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROV_CERT_URL,
      client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT_URL
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  })
}

export const workSessionCollection = 'sessions'

export const getDb = () => admin.firestore()

export const getWorkingSessionsFromUserParams = (params) => {
  if (params.includes('#')) {
    const [username, discriminator] = params.split('#')

    return getDb()
      .collection(workSessionCollection)
      .where('username', '==', username)
      .where('discriminator', '==', discriminator)
      .where('isFinished', '==', true)
      .get()
  } else {
    return getDb()
      .collection(workSessionCollection)
      .where('discordId', '==', params)
      .where('isFinished', '==', true)
      .get()
  }
}
