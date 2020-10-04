import styles from './SearchBar.module.scss'

export default function SearchBar() {
  return (
    <div className={styles.SearchBar}>
      <h3>Introduce tu nombre de usuario, o tu id de Discord.</h3>

      <form>
        <input type="text" />
        <input type="submit" />
      </form>

      <p>Puedes usar el comando !!me en Discord (canal #bots) para saber tu id de Discord</p>
    </div>
  )
}
