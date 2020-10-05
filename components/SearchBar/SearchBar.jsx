import { useState } from 'react'
import { useRouter } from 'next/router'

import styles from './SearchBar.module.scss'

export default function SearchBar() {
  const router = useRouter()
  const [searchState, setSearchState] = useState('')

  function handleInputChange(ev) {
    const value = ev.target.value
    setSearchState(value)
  }

  function handleSearch(ev) {
    ev.preventDefault()
    console.log('i work', searchState)
    router.push(`/info/${searchState}`)
  }

  return (
    <div className={styles.SearchBar}>
      <h3>Introduce tu nombre de usuario, o tu id de Discord.</h3>

      <form onSubmit={handleSearch}>
        <input type="text" name="searchBar" value={searchState} onChange={handleInputChange} />
        <button type="submit" disabled={!searchState}>
          <img src="/images/search-icon.svg" alt="magnifying glass icon" />
        </button>
      </form>

      <p>
        Puedes usar el comando <b>!!me en Discord</b> (canal #bots) <b>para saber tu id</b> de
        Discord
      </p>
    </div>
  )
}
