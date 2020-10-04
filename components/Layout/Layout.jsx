import Head from 'next/head'

import Navbar from '../Navbar'

import styles from './Layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpaca Work Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer>Footer</footer>
    </div>
  )
}
