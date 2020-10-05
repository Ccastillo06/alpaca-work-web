import Link from 'next/link'

import styles from './Navbar.module.scss'

export default function Navbar() {
  return (
    <header className={styles.Navbar}>
      <nav className={styles.logo}>
        <Link href="/">
          <a>
            <img src="/images/main-logo.png" alt="Sala del código image" />
            <h1>Sala del Código</h1>
          </a>
        </Link>
      </nav>

      <div className={styles.empty} />
    </header>
  )
}
