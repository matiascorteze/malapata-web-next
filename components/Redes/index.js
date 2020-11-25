import styles from "./Redes.module.css"

export default function Redes() {
  return (
    <div className={styles.redesContainer}>
      <div className={styles.redesHeader}>
        <a
          href="https://www.instagram.com/malapata3d/"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.redesTitle}>@malapata3d</a>
        <h3 className={styles.redesSubtitle}>seguinos 😄</h3>
      </div>
    </div>
  )
}