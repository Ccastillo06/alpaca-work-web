import Head from 'next/head';

import styles from './Layout.module.scss';

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alpaca Work Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>Header</header>
      <main className={styles.main}>{children}</main>
      <footer>Footer</footer>
    </div>
  );
}
