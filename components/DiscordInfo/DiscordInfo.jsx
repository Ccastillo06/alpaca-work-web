import styles from './DiscordInfo.module.scss'

export default function DiscordInfo({ username, discriminator, discordId }) {
  return (
    <section>
      <ul className={styles.list}>
        <h2>Datos de Discord:</h2>

        <li>
          <h3>
            <span role="img">🧐</span> {username}#{discriminator}
          </h3>
        </li>
        <li>
          <h3>
            <span role="img">🆔</span> {discordId}
          </h3>
        </li>
      </ul>
    </section>
  )
}
