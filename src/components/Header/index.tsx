import styles from './Header.module.scss'

const Header = () => {
  return(
    <header className={styles.header}>
      <h1 className={styles.title}>Send Messages (SMS)</h1>
    </header>
  )
}

export default Header